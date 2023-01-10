const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema ({
    idUser: Number,
    idHome: Number,
    idlocation: Number,




});
module.exports = mongoose.model('Reservation', reservationSchema);