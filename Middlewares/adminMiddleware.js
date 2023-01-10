const user = require ('../Models/userSchema')
const adminMiddleware = async (req, res, next)=>{
    try{
        const user = await user.findById(req.userId);
        if (user.role === 'admin') next();
        else res.status(401).json({msg:'you are not authorized' });
    }catch (error){
        res.status(400).json({ errors: [{ msg: err.message }] });
    }



    
};
module.exports = adminMiddleware;