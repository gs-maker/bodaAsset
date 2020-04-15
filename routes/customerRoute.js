const express = require('express')
const router = express.Router()
const Customer = require('../models/customerModel')

// routes
router.get('/', (req, res) => {
   res.send("this is the customer registration page")
})

// save to the database
router.post('/registration', async (req, res) => {
   try {
      const customer = new Customer(req.body)
      await customer.save()
   } catch (error) {
      console.log(error)
      res.status(500, 'unable to save to database')
   }
})

// customer route model export
module.exports = router;