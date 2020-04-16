const mongoose = require('mongoose')

// customer registration model definition
const agentSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   idNum: String,
   residence: String,
   resDivision: String,
   parish: String,
   email: String,
   phone: String,
   dob: Date,
   emNumber: String,
   startDate: {
      type: Date,
      default: Date.now
   },
   emStatus: String,
   role: String,
   supervisor: String,
   workStation: String,
   userName: String,
   emPass: String
})

// schema export for external use
module.exports = mongoose.model('agent', agentSchema)