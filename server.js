const express = require('express');
const helmet = require('helmet');
const server = express();

const userRoutes = require('./routes/users-routes')

server.use(helmet())
server.use(express.json());

server.use('/api', userRoutes)
module.exports = server;