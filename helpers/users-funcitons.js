const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
  find,
  findBy,
  findUserById,
  createUser,
}

function find(){
  return db('users')
}

function findUserById(userId){
  return db('users')
  .select('username', 'password')
    .where({id: Number(userId)})
    .first()
}

function findBy(filter){
  return db('users')
    .where(filter)
}

function createUser(newUser){
  return db('users')
  .insert(newUser)
  .then(id => ({id: id[0]}))
}