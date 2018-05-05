const mongoose = require('../');
const { Schema } = require('mongoose');

const userSchema = new Schema ({
  username: String,
  password: String
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;