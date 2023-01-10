const express = require('express');
const router = express.Router()
const Reservation = require('../Models/reservationSchema')

//add reservation @Post
router.post('/newreservation', (req, res) => {
    let newreservation = new location(req.body)
    newreservation.save((err, data) => {
        err ? console.log(err) : res.send('reservation was added')
    })

    //get reservation @get
    router.get('/', (req, res) => {
        reservation.find({}, (err, data) => {
            err ? console.log(err) : res.json(data)
        })
    })

    //get reservation by id @Get
    router.get('/:id', (req, res) => {
        reservation.find({ _id: req.params.id }, (err, data) => {
            err ? console.log(err) : res.json(data)
        })
    })

    //delete reservation by id @delete
    router.delete('/deletereservation/:id', (req, res) => {

        reservation.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
            err ? console.log(err) : res.json({ msg: 'reservation was deleted' })
        })
    })

    // update reservation by id @Put
    router.put('/update/id', (req, res) => {
        reservation.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
            err ? console.log(err) : res.json({ msg: 'reservation was updated' })
        })
    })


});
module.exports = router;