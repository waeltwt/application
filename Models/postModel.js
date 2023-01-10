const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,

    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    image: {
        type: String,
    },
    // path:{
    //     type: String,        
    // }



});
module.exports = mongoose.model('post', postSchema);
