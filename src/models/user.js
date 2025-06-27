// src/models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },      // For login
  email:    { type: String, required: false, unique: true },     // Optional email
  password: { type: String, required: true },                    // Hashed password
  role:     { type: String, enum: ['admin', 'user'], default: 'admin' } // Default role
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
