const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Signup Route
const { validateSiginInInput, validateSignUpInput, validateUserCredential } = require('./types');
const { Users, Accounts } = require('../db');

// Checks user exist in database
async function userExist(username) {
    const exist = await Users.findOne({
        username,
    });
    if (exist === null) {
        return false;
    }
    else {
        return exist;
    }
}

// Sign Up route for users
router.post('/signup', validateSignUpInput, async (req, res) => {
    const body = req.body;
    if (!await userExist(body.username)) {
        const user = await Users.create(body);
        user.save();
        const balance =1+ Math.floor(Math.random()*10000);
        const account = await Accounts.create({
            userId : user._id,
            balance
        });
        account.save();
        const token = jwt.sign({
            userId: user._id
        }, process.env.SECRET_KEY);

        res.status(200).json({
            msg: "user created",
            token
        });
    }
    else {
        res.json({
            msg: "user already exist"
        });
    }
})


//  Sign In routes
router.post('/signin', validateSiginInInput, async (req, res) => {
    const body = req.body;
    const exist = await userExist(body.username);
    if (exist) {
        const token = jwt.sign({
            userId: exist._id
        }, process.env.SECRET_KEY);
        res.status(200).json({
            token
        });
    }
    else {
        res.status(411).json({
            msg: "user doesn't exist"
        });
    }
});

// User Update Profile
const { authMiddleware } = require('./middleware');

router.put('/', validateUserCredential, authMiddleware, async (req, res) => {
    const body = req.body;
    const _id = req.userId;
    const updateUser = await Users.updateOne({ _id }, body);
    if (updateUser.modifiedCount) {
        res.status(200).json({ msg: "updated successfully" });
    }
    else {
        res.status(411).json({
            msg: "error while updating"
        });
    }
});

// route to get filtered user
router.get('/bulk', authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const filteredUser = await Users.find({
        $or: [
            {
                firstName: { "$regex": filter, '$options' : 'i'},
            },
            {
                lastName: { "$regex": filter,'$options' : 'i' }
            }
        ]
    })
    res.json({
        user : filteredUser.map((userList)=>{
            return {firstName : userList.firstName , lastName : userList.lastName, _id : userList._id} 
        })
    })

})
module.exports = router;