// express server setup
const express = require('express')
const server = express()
const path = require('path')
const passport = require('passport');
const session = require('express-session')
server.use('/static', express.static(path.join(__dirname, 'public')))

const User = require('./models/userModel');

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

// passport
server.use(passport.initialize());
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// use sessions to track logins
server.use(session({
   secret: 'katogoNeChai`',
   resave: false,
   saveUninitialized: false
}));

// imported routes
const customerRoute = require('./routes/customerRoute')
server.use('/customer', customerRoute)
const agentRoute = require('./routes/agentRoute')
server.use('/agent', agentRoute)


// listening port
const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`Listening on port ${PORT}`))