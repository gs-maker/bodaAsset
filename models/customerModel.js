const mongoose = require('mongoose')

// customer registration model definition
const customerSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   maritalStatus: String,
   address: String,
   dob: String,
   IdNum: String,
   email: String,
   phoneNum: String,
   vehicle: String,
   stageName: String,
   councilOne: String,
   councilThree: String,
   customerID: String,
})

// schema export for external use
module.exports = mongoose.model('customer', customerSchema)