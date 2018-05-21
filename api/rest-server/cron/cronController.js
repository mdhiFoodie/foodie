const cron = require('cron');  
const stripe = require('stripe')(process.env.SECRET_KEY);
const Order = require('../src/config/databases/mongo/orders/ordersModel');
const { Schema } = require('mongoose'); 
import client from '../redis'; 

import {
  success, 
  error
} from '../../lib/log';
import {
  getUserPaymentIdAndEmail
} from './cronQueries.js'; 

/**
 * I need to grab poolID from redis 
 * for each poolID grab all the users ID and the total 
 * for each user make the charge 
 *  Get user's paymentid from the db and email 
 *  
 */


const chargeUser = new cron.CronJob({
  cronTime: '* * * * * ',
  onTick: async () => {
    try {
//look for users ID and return email and paymentid on redis? 
//Case: if for some reason user doesn't have paymentid ? 
//GRAB USERS POOL 
//GRAB USERS ID 
//Grab users email and stripeaccount to make the charge 
      const body = {
        id: 3
      }
      const { stripeaccount, email } = await getUserPaymentIdAndEmail(body); 

//Charge each customer 
    const charge = await stripe.charges.create({
    amount: 50, // This is in cents
    currency: 'usd',
    source: `${stripeaccount}`,
    receipt_email: `${email}`,
  });
  console.log('Charge customer', charge); 
    success('Successfully charge users in each pool order'); 
  } catch(err) {
    error('Error from cronController inside charge user', err); 
  }
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});

/**
 * After order is been deliver 
 * Grab the orders id 
 * Save data in the MongoDB
 */

const userOrderHistory = new cron.CronJob({
  //Save all the orders of the day after delivery so 1pm everyday 
  cronTime: '* * * * * *', 
  onTick: async () => {
    //Save each user order on mongoDB 
    //Get information from redis 
    try {
      const order = new Order({
        userId: 3,
        businessId: 3,
        createdAt: '05/21/2018',
        cart: '{name: price, name: price, name: price, name: price}',
        total: 50, 
        location: '6060 Center Dr Culver City CA'
      });
      const saveOrders = await order.save(); 
      success('Successfully save each order '); 
    } catch(err) {
      error('Failed saving order history from cronController error= ', err); 
    }
  },
  start: false, 
  timeZone: 'America/Los_Angeles'
});


//Save them to the db 

module.exports = {
  chargeUser, 
  userOrderHistory
}
