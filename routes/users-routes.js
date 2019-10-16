const express = require('express')
const route = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../helpers/users-funcitons');
const check = require('./middleware')

//GET: Get all the users in the DB currently
route.get('/users', check.validateLogin, (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json({data: users})
    })
})

// POST: Create a new user
route.post('/register', check.validateRegister, (req, res)=> {
  // crate a var called new user
  let newUser = req.body

  // hash the incoming password of the new user and assign it to the password field
  newUser.password = bcrypt.hashSync(newUser.password)
  
  console.log("FROM THE REGISTER " ,req.session)

  // insert the new user
  db.createUser(newUser)
    .then(id => {
      db.findUserById(id.id)
        .then(createdUser => res.status(201).json(createdUser))
    })
    .catch(err => res.status(500).json({message: "The DB ran into a issue", err: err}))
})

// POST: login as a already existing user
route.post('/login', (req, res) => {
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        // save some session information
        req.session.username = user.username;

        console.log("FROM THE LOGIN" ,req.session)

        res.status(200).json({
          message: `Welcome ${user.username}!`,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


// GET: logout from the user account
route.get('/logout', (req, res) => {
  req.session ? 
  req.session.destroy(() => res.status(200).json({message: "You have been logged out"})) 
  : res.status(200).json({message: "alreday logged out"})

})

// Test endpoint edit as needed to test things
route.get('/test/:id', (req, res) => {
  db.findUser(req.params.id)
    .then(user => console.log(user))
})


module.exports = route