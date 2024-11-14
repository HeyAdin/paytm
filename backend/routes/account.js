const express = require('express');
const { authMiddleware } = require('./middleware');
const { Accounts } = require('../db');
const router = express.Router();

router.get('/balance',authMiddleware,async(req,res)=>{
    const user = await Accounts.findOne({userId : req.userId});
    res.status(200).json({balance : user.balance})
})

router.post('/transfer',authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const {to, amount} = req.body;
    const user = await Accounts.findOne({userId});
    if(user.balance < amount){
        res.status(400).json({msg : "insufficient fund"});
    }
    else{
        const toAccount = await Accounts.findOne({userId : to});
        if(toAccount === null){
            res.status(400).json({msg : "invalid account"})
        }
        else{
            await Accounts.findOneAndUpdate({userId},{
                $inc :{
                    balance : -amount
                }
            })
            await Accounts.findOneAndUpdate({userId : to},{
                $inc :{
                    balance : +amount
                }
            })
            res.json({msg :"all good"})
        }
    }
})
module.exports = router;