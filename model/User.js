const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {
        primaryKey:true,
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
}) 



module.exports = model('User', UserSchema)