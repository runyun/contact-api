const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  birthday: String,
  email: String,
  favoriteColor: String,
  firstName: String,
  lastName: String,
},
{ versionKey: false }
);

const contact = mongoose.model('Contacts', contactSchema);

module.exports = contact;