const express = require('express');
const { authMiddleware } = require('./middleware');
const { Accounts } = require('../db');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/balance', authMiddleware, async (req, res) => {
    const user = await Accounts.findOne({ userId: req.userId });
    res.status(200).json({ balance: user.balance })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { to, amount } = req.body;
    const userId = req.userId;
    const user = await Accounts.findOne({ userId }).session(session);
    if (user.balance < amount) {
        await session.abortTransaction();
        res.status(400).json({ msg: "insufficient fund" });
    }
    else {
        const toAccount = await Accounts.findOne({ userId: to }).session(session);
        if (toAccount === null) {
            await session.abortTransaction();
            res.status(400).json({ msg: "invalid account" })
        }
        else {
            await Accounts.findOneAndUpdate({ userId }, {
                $inc: {
                    balance: -amount
                }
            }).session(session);
            await Accounts.findOneAndUpdate({ userId: to }, {
                $inc: {
                    balance: amount
                }
            }).session(session);
            await session.commitTransaction();
            res.json({ msg: "transaction successfull" })
        }
    }
})
module.exports = router;