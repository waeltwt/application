const express = require('express');
const router = express.Router()
const Location = require('../Models/locationSchema')

//add location @Post
router.post('/newlocation', (req, res) => {
    let newLocation = new location(req.body)
    newLocation.save((err, data) => {
        err ? console.log(err) : res.send('location was added')
    })

    //get location @get
    router.get('/', (req, res) => {
        location.find({}, (err, data) => {
            err ? console.log(err) : res.json(data)
        })
    })

    //get location by id @Get
    router.get('/:id', (req, res) => {
        location.find({ _id: req.params.id }, (err, data) => {
            err ? console.log(err) : res.json(data)
        })
    })

    //delete location by id @delete
    router.delete('/deletelocation/:id', (req, res) => {

        location.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
            err ? console.log(err) : res.json({ msg: 'location was deleted' })
        })
    })

    // update location by id @Put
    router.put('/update/id', (req, res) => {
        location.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
            err ? console.log(err) : res.json({ msg: 'location was updated' })
        })
    })


});
module.exports = router;