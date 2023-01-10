const mongoose = require('mongoose')
const Schema = mongoose.Schema


const homeSchema = new Schema({

    homeName: String,
    numberOfRoom: Number,
    MaxNumberOfPerson: Number,
    seaview: String,
    owner: String,
    price: Number,
    image: {
        imageURL: String,
        public_key: String,
    }


});
module.exports = mongoose.model('Home', homeSchema);