const express = require('express')
const router = express.Router()
const path = require('path')
const Agent = require('../models/agentModel')

// routes
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../views', 'agentReg.html'))
})

// save to the database
router.post('/registration', async (req, res) => {
   try {
      const agent = new Agent(req.body)
      await agent.save()
   } catch (error) {
      console.log(error)
      res.status(400, 'unable to save to database')
   }
})

// edit/update agent entry and information


// agent route model export
module.exports = router;