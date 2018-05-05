const mongoose = require('../');
const { Schema } = require('mongoose');

const messagesSchema = new Schema ({
  messageBody: Text
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;