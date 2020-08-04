module.exports = {
  validateRegister,
  validateLogin,
}

function validateRegister(req, res, next){
  const {username, password} = req.body

  if(username && password){
    next()
  } else {
    res.status(400).json({message: "Please provide a username and a password."})
  }
}

function validateLogin(req, res, next){
  // check that we have a session if we don contine, else you are not logged in
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
}