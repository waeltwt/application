const express = require('express');
const { login, register, loadUserInfo } = require('../controllers/userControlles');
const authMiddleware = require('../Middlewares/authMiddleware');
const router = express.Router()
const User = require('../Models/userSchema')
const adminMiddleware = require('../Middlewares/adminMiddleware')



router.post('/register', register)

router.post('/login', login)





module.exports = router;