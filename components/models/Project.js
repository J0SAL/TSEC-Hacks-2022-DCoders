const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true,
    },
    projectdesc: {
        type: String,
        required: true,
    },
    ownerid : {
        type: String,
        required: true,
    },
    project_status: {
        type: String,
        default: "active"
    },
    domains:{
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
    contributors:{ 
        type: Number,
        default: 0
    }
},  { versionKey: false })

const Project = mongoose.model('Project', projectSchema)

module.exports = Project