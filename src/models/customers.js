const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

// Create (only when calls a new instance creation)
const Model = mongoose.model('customers', schema) //if exists -> do nothing

module.exports = Model