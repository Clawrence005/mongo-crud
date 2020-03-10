const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new Schema({
  // validators need a plugin in mongoose
  // userName: { type: String, required: [true, "user name can not be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], unique: true},
  // email: { type: String,required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], unique: true},
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  image: { type: String },
  hash: { type: String },
  salt: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema)