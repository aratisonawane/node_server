const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:{
        type: String,
        default:'',
    },
    address:{
        type: String,
        default:'',
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    },
    mobile:{
        type: String,
    },
    password:{
        type: String,
    },
    status:{
        type: Boolean,
        default:'true',
    }

}, { timestamps: true});

module.exports = mongoose.model('User', User);