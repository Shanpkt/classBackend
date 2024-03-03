const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  age: String,
  email: String,
  
firstName: String,
javascriptProficiency: Number,

lastName: String,
  
mobileNumber: String,

reactProficiency:Number

});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = User; // Export User model
