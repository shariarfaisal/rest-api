const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true
  }
})


const Contact = mongoose.model('Contact',ContactSchema)
module.exports = Contact
