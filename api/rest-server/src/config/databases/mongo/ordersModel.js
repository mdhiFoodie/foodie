const mongoose = require('../');
const { Schema } = require('mongoose');

const ordersSchema = new Schema ({
  createdAt: Number,
  cart: Number,
  total: Number,
  location: Number,
  totalUsersInEachOrder: Number
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;