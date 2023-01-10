const user = require ('../Models/userSchema')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

//const { exists } = require('../Models/userSchema')


//register new user & return token
//route:POST /api/user/register
//access public

const register = async (req, res) => {
  const exist=await user.findOne({email:req.body.email});
  if(exist) return  res.status(500).json({ msg: 'Email aleady exist'})

  
    try {
        const {firstName,lastName,email,password,civility,adress,phoneNomber} = req.body;
        
        const hashedPassword = await bcrypt.hash(password,10)
        
      let role="user"
        const newUser = await user.create({firstName,lastName,email,password:hashedPassword,civility,adress,phoneNomber,role})
         console.log(newUser)
        const token = await jwt.sign({id:newUser._id,email:newUser.email},"waeltouati123")
        res.status(201).send({token:token})
        // res.status(201).json({msg:'user created'})

    } 
    catch (error){
        res.status(500).send(error)
    }
  }


//register new user can login & return token
//route:POST /contacts/login/
//access public


  const login = async (req, res) => {
    try {
        const {email,password} = req.body
        const existUser = await user.findOne({email})
        if(!existUser) return res.status(404).json({ msg: 'You should register first.'})
        const verifyPassword = await bcrypt.compare(password,existUser.password)
        if(!verifyPassword) return res.status(401).json({  msg: 'wrong password'})
        const token = jwt.sign({id:existUser._id,email:email},"waeltouati123")
        console.log(token);
        res.status(201).send({token:token})
    }catch (error) {
      console.log(error);
        res.status(500).json({ msg: 'something went wrong '})
    }
  }

// takes token & return user info
// route GET /api/user/loaduser
// access PRIVATE-user

const loadUserInfo = async(req, res) => {
  try{
    //console.log(req.userId)
    const user =await user.finById(req.userId)
    console.log('user',user)
    res.json(user)


  }catch (error){
    res.status(500).json({ msg: `something went wrong ${error}`})
    }
}


  module.exports = {register,login,loadUserInfo}


