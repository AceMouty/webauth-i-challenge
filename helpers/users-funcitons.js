const knex = require('kenex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  createUser,
}

function createUser(newUser){
  return db('users')
  .insert(newUser)
}