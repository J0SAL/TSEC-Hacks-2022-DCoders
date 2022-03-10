const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    skills:{
        cpp:{
            type:String,
            required:true
        },
        java:{
            type:String,
            required:true
        },
        python:{
            type:String,
            required:true
        },
        javascript:{
            type:String,
            required:true
        },
        flutter:{
            type:String,
            required:true
        }
    },
    contirbutions:{ 
        type: Number,
        default: 0
    }
},  { versionKey: false })

const User = mongoose.model('User', userSchema)

module.exports = User