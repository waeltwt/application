const express = require('express')
const router = require('express').Router();
const { addPost, getPosts } = require('../controllers/postControllers')
const multer = require('multer');
const { authMiddleware } = require('../Middlewares/authMiddleware');


const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName)

  }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

router.post('/addPost', upload.single('file'), addPost);
router.get('/', getPosts);





module.exports = router;