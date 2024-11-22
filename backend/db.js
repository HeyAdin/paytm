const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGOURL);

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minLength : 3,
        maxLength : 30,
        lowercase : true
    },
    password : {
        type :String,
        required : true,
        minLength : 6
    },
    firstName : {
        type : String,
        required : true,
        maxLength :50,
        trim : true 
    },
    lastName : {
        type : String,
        required : true,
        maxLength :50,
        trim : true 
    }
})
const Users = mongoose.model('Users',userSchema);

// Accounts Schema 
const accountSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required : true,
    },
    balance : {
        type : Number,
        required : true
    }
})
const Accounts = mongoose.model('Accounts',accountSchema);

module.exports = {
    Users,
    Accounts
}