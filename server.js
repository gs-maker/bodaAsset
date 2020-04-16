// express server setup
const express = require('express')
const server = express()


// mongodb connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bodaAsset',
   { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) throw error;
      console.log('succesfully connected to database')
   })


// middleware
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


// imported routes
const customerRoute = require('./routes/customerRoute')
server.use('/customer', customerRoute)
const agentRoute = require('./routes/agentRoute')
server.use('/agent', agentRoute)


// listening port
const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`Listening on port ${PORT}`))