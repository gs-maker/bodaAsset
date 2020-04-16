const express = require('express')
const router = express.Router()
const path = require('path')
const Agent = require('../models/customerModel')

// routes
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'customerReg.html'))
})

// save to the database
router.post('/registration', async (req, res) => {
   try {
      const customer = new Agent(req.body)
      await customer.save()
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to save to database')
   }
})

// edit/update customer entry and information


// customer route model export
module.exports = router;