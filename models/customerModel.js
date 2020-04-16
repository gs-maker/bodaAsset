const mongoose = require('mongoose')

// customer registration model definition
const customerSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   idNum: String,
   residence: String,
   redDivision: String,
   parish: String,
   email: String,
   phone: String,
   dob: Date,
   phoneNum: String,
   vehicle: String,
   stageName: String,
   workDivision: String,
   chairman: String,
   serialNum: String,
   regDate: {
      type: Date,
      default: Date.now
   },
   vmake: String,
   business: String,
   period: String,
   initPay: String,
   balPay: String,
   monthlyPay: String,
   customerID: String,
   refName: String,
   refNum: String
})

// schema export for external use
module.exports = mongoose.model('customer', customerSchema)