const express = require('express')
const route = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../helpers/users-funcitons');
const check = require('./middleware')

//GET: Get all the users in the DB currently
route.get('/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json({data: users})
    })
})

route.post('/register', check.validateRegister, (req, res)=> {
  // crate a var called new user
  let newUser = req.body

  // hash the incoming password of the new user and assign it to the password field
  newUser.password = bcrypt.hashSync(newUser.password)

  // insert the new user
  db.createUser(newUser)
    .then(id => {
      db.findUser(id.id)
        .then(createdUser => res.status(201).json(createdUser))
    })
    .catch(() => res.status(500).json({message: "The DB ran into a issue"}))
})


// Test endpoint edit as needed to test things
route.get('/test/:id', (req, res) => {
  db.findUser(req.params.id)
    .then(user => console.log(user))
})


module.exports = route