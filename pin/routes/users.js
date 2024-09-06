const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
const { post } = require('.');


mongoose.connect('mongodb+srv://itsmeomarora:NIXr0ak0ASS3vMFF@pinterest.hi5t9.mongodb.net/?retryWrites=true&w=majority&appName=Pinterest');
// itsmeomarora
// NIXr0ak0ASS3vMFF
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }]
});

userSchema.plugin(plm);


module.exports = mongoose.model('User', userSchema);