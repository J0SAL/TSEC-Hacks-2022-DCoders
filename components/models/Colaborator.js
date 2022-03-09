// TODO

const mongoose = require('mongoose')

const colabSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    project_id: {
        type: String,
        required: true,
    }
},  { versionKey: false })

const Colaborator = mongoose.model('Colaborator', colabSchema)

module.exports = Colaborator