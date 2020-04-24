const express = require('express')
const router = express.Router()
const path = require('path')
const Customer = require('../models/customerModel')

// routes
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'customerReg.html'))
})


// save to the database
router.post('/registration', async (req, res) => {
   try {
      const customer = new Customer(req.body)
      await customer.save()
      res.redirect('/customer/bodas')
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to save to database')
   }
})


// registered customers/boda list
router.get('/bodas', async (req, res) => {
   try {
      const allCustomers = await Customer.find()
      res.render('customerList', { allCustomers: allCustomers })
   } catch (error) {
      console.log(error)
      res.status(404, 'unable to find customer list')
   }
})


// delete customer
router.post('/delete/:customerId', async (req, res) => {
   try {
      await Customer.findByIdAndRemove(req.params.customerId)
      res.redirect('back')
   } catch (error) {
      res.status(400).send("unable to delete from database");
   }
})


// customer edit from entry form
router.get('/edit/:customerId', (req, res) => {
   Customer.findById(req.params.customerId, (err, customer) => {
      if (err) return res.status(500).send('fake')
      if (customer) {
         return res.status(200).render('customerEdit', { title: 'Customer Edit', customerEdit: customer })
      }
   })
})


// edited customer route save to database


// customer route model export
module.exports = router;