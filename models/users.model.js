const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
 name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Users', usersSchema);

