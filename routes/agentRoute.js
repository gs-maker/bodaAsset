const express = require('express')
const router = express.Router()
const path = require('path')
const Agent = require('../models/agentModel')

// routes
// agent registration route
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'agentReg.html'))
})

// save to the database
router.post('/registration', async (req, res) => {
   try {
      const agent = new Agent(req.body)
      await agent.save()
      res.redirect('/agent/employees')
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to save to database')
   }
})

// registered employees list
router.get('/employees', async (req, res) => {
   try {
      const employees = await Agent.find()
      res.render('employeeList', { allAgents: employees })
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to find employee')
   }
})


// agent route model export
module.exports = router;