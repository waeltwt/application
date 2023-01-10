const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    firstName: String,
    lastName: String,
    civility: String,
    adress: String,
    phoneNomber: Number,
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    }

});
module.exports = mongoose.model('user', userSchema);