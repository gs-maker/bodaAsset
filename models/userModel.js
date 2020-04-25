const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

// schema definition
var registerSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   role: { type: String, required: 'Please enter a role' },
})

// model export for external use
registerSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = mongoose.model('User', registerSchema)