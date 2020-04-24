// express server setup
const express = require('express')
const server = express()
const path = require('path')
server.use('/static', express.static(path.join(__dirname, 'public')))


// mongodb connection
const mongoose = require('mongoose')
mongoose.set("useFindAndModify", false)
mongoose.connect('mongodb://localhost:27017/bodaAsset',
   { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (err) throw error;
      console.log('succesfully connected to database')
   })


// middleware
server.set('views', __dirname + '/views')
server.set('view engine', 'pug')

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