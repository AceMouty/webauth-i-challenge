const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors');
// bing in express sessions
const sessions = require('express-session');
// bring in knex sessions
const knexSessionStore = require('connect-session-knex')(sessions);

// config file for knex
const knexConfig = require('./data/dbConfig')

// Express Routers
const userRoutes = require('./routes/users-routes')

// Config for session cookies
const sessionConfig = {
  name: 'userCookie',
  secret: "keep it a secret, keep it safe",
  cookie: {
    maxAge: 1000 * 60 * 60, // 1hr cookie time
    secure: false, // set to true for HTTP in prod
    httpOnly: true, // DO NOT allow JS access to the cookie info
  },
  resave: false,
  saveUninitialized: true, // set to false in prod, this is due to GDP laws
  store: new knexSessionStore({
    knex: knexConfig,
    createtable: true, // create a session table for us 
    clearInterval: 1000 * 60 * 30 // clear out old sessions every 30 min.
  })
}

// Global Middleware
server.use(sessions(sessionConfig))
server.use(helmet())
server.use(cors())
server.use(express.json());

server.use('/api', userRoutes)

module.exports = server;