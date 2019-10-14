module.exports = {
  validateRegister
}

function validateRegister(req, res, next){
  const {username, password} = req.body

  if(username && password){
    next()
  } else {
    res.status(400).json({message: "Please provide a username and a password."})
  }
}