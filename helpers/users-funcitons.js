const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  find,
  findUser,
  createUser,
}

function find(){
  return db('users')
}

function findUser(userId){
  return db('users')
  .select('username', 'password')
    .where({id: Number(userId)})
    .first()
}

function createUser(newUser){
  return db('users')
  .insert(newUser)
  .then(id => ({id: id[0]}))
}