const express = require('express');
const helmet = require('helmet');
const server = express();
const cors = require('cors')

const userRoutes = require('./routes/users-routes')

server.use(helmet())
server.use(cors())
server.use(express.json());

server.use('/api', userRoutes)

module.exports = server;