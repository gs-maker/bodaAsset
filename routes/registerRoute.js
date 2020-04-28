const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const User = require('../models/userModel');


// the resonse argument helps us use a send method
// res.send('Hello World')

router.get('/index', (req, res) => {
   res.render('index')
   // res.render('index')
});

router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'index.html'));
   // res.render('index')
})

// updated
router.post("/update", async (req, res) => {
   if (req.session.user) {
      try {
         const updateduser = await User.findOneAndUpdate({ _id: req.session.user._id }, req.body)
         const role = permissions[updateduser.role]
         res.redirect(role.homepage);
      } catch (error) {
         res.status(400).send("unable to update to database");
      }
   }
   else {
      res.redirect('/login')
   }
})

// async/await refactored code
router.post('/', async (req, res) => {
   try {
      var user = new User(req.body);
      await User.register(user, req.body.password, (err) => {
         if (err) { throw err }
         res.redirect('/login')
      })
   } catch (error) {
      console.log(error.message)
      res.status(400).send("unable to save to database");
   }
})

// Code to Delete a User and keep you on the same page
router.post("/delete", async (req, res) => {
   try {
      await User.deleteOne({ _id: req.body.id })
      res.redirect('back')
   } catch (error) {
      res.status(400).send("unable to delete from database");
   }
})

module.exports = router;