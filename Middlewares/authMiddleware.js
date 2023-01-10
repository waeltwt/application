const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  try {
    c
    const token = req.headers('token');
    console.log(req.headers.token)
    const verifyToken = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    req.userId = verifyToken.id;
    next();
  } catch (error) {
    res.status(400).json({ errors: [{ msg: err.message }] })
  }
};
module.exports = authMiddleware;
