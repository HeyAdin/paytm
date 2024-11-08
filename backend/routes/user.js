const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Signup Route
const {validateSiginInInput , validateSignUpInput} = require('./types');
const { Users } = require('../db');

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
        console.log(user)
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
router.post('/signin',validateSiginInInput,async(req,res)=>{
    const body = req.body;
    const exist = await userExist(body.username);
    if(exist){
        const token = jwt.sign({
            userId : exist._id
        },process.env.SECRET_KEY);
        res.status(200).json({
            token
        });
    }
    else{
        res.status(411).json({
            msg : "user doesn't exist"
        });
    }
});

module.exports = router;