import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
  role: {
    type: String,
    enum: ['admin', 'developer', 'guest'],
    default: 'guest',
  },
}, {
  timestamps: true, // auto-creates createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

export default User;
