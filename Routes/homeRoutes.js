const express = require('express');
const { home } = require('nodemon/lib/utils');
const router = express.Router()
const Home = require('../Models/homeSchema')


//add home @Post
router.post('/newhome', (req, res) => {
    console.log("home")
    let newHome = new Home(req.body)
    newHome.save((err, data) => {
        err ? console.log(err) : res.send('home was added')
    })
});

//get home @get
router.get('/', (req, res) => {
    home.find({}, (err, data) => {
        err ? console.log(err) : res.json(data)
    })
})

//get home by id @Get
router.get('/:id', (req, res) => {
    home.find({ _id: req.params.id }, (err, data) => {
        err ? console.log(err) : res.json(data)
    })
})


//delete home by id @delete
router.delete('/deletehome/:id', (req, res) => {

    home.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
        err ? console.log(err) : res.json({ msg: 'home was deleted' })
    })
})

// update home by id @Put
router.put('/update/id', (req, res) => {
    home.findByIdAndUpdate({ _id: req.params.id }, (err, msg) => {
        err ? console.log(err) : res.json({ msg: 'home was updated' })
    })
})


module.exports = router;