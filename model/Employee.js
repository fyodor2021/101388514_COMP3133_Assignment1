const {Schema, model} = require('mongoose');

const EmployeeSchema = {
    first_name: {
        type:String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    gender:{
        type:String,
        required: true,
        enum: ['male','female','other'],
    },
    salary: {
        type: Number,
        required: true,
    }
}

module.exports = model('Employee', EmployeeSchema);