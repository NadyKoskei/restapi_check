const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
userSchema.pre('save', function() {
  this.updatedAt = Date.now();
});

// Update the updatedAt field before updating
userSchema.pre('findOneAndUpdate', function() {
  this.set({ updatedAt: Date.now() });
});

// Export the User model
module.exports = mongoose.model('User', userSchema);