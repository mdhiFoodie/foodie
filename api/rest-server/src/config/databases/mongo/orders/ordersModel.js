const mongoose = require('../index.js');
const { Schema } = require('mongoose');
import {
  success, 
  error
} from '../../../../../../lib/log';


const ordersSchema = new Schema({
  userId: Number,
  businessId: Number,
  businessName: String, 
  createdAt: String,
  cart: String,
  total: Number, 
  location: String, 
  count: Number
});

const Orders = mongoose.model('Orders', ordersSchema); 

const orderSample = new Orders({
  userId: 0,
  businessId: 0,
  businessName: '', 
  createdAt: '',
  cart: '',
  total: 0, 
  location: '',
  count: 0
});

orderSample.save() 
  .then( () => {
    success('mongo queries connected');
  })
  .catch( () => {
    error('error mongo queries');
  });



module.exports = Orders;