const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path');


app.use(express.json());



//connection database with server
const mongoUrl = "mongodb+srv://touati:waeltouati123@cluster1.vcyckdj.mongodb.net/?retryWrites=true&w=majority"
// cors setup
const cors = require("cors")
app.use(cors())
//cors setting
app.use(cors('http://localhost:5000'))
//parse the data
app.use(express.json());
// routes
app.use('/api/user', require('./Routes/userRoutes'))
app.use('/api/home', require('./Routes/homeRoutes'))
app.use('/api/location', require('./Routes/locationRoutes'))
app.use('/api/reservation', require('./Routes/reservationRoutes'))
const postRoutes = require('./Routes/postRoutes')
app.use('/api/post', postRoutes)
//get image
app.use('/uploads', express.static(__dirname + '/uploads'))
console.log(__dirname)
//app.use('/uploads', express.static(path.join(__dirname, '../', '/uploads')));

//connecting to database
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    err ? console.log(err) : console.log('database is connected')
})

const port = 5000
app.listen(port, (err) => {
    err ? console.log(err) : console.log('server is running on port 5000')
})

