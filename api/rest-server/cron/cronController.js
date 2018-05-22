const cron = require('cron');  
const stripe = require('stripe')(process.env.SECRET_KEY);
const Order = require('../src/config/databases/mongo/orders/ordersModel');
import bluebird from 'bluebird';
bluebird.promisifyAll(client);
const { Schema } = require('mongoose'); 
import client from '../redis'; 

import {
  success, 
  error
} from '../../lib/log';
import {
  getUserPaymentIdAndEmail
} from './cronQueries.js'; 


const chargeUser = new cron.CronJob({
  cronTime: '* * * * * *',
  onTick: async () => {
    try {
      let count; 
      let discount;  
      let userId; 
      let total; 

      const poolIds = await client.smembersAsync('allPools')
        const pools = [];
        for (let i = 0; i < poolIds.length; i++) {
          let poolData = await client.hgetallAsync(poolIds[i]);
          count = poolData.count; 

          let allOrder = await client.hgetallAsync(poolData.bizId); 
          for (var key in allOrder) {
            userId = key; //Will be in the format poolId:userId 
            let subtotal = 0;
            let order = JSON.parse(allOrder[key]);
              for (var item in order) {
                let quantity = JSON.parse(order[item])[1];
                let price = JSON.parse(order[item])[0];
                subtotal += price * quantity;
              }
              if(count < 5) {
                discount = 1; 
              }
              if(count < 10 && count > 5) {
                discount = 1; 
              }
              if(count < 15 && count > 10) {
                discount = .95;
              }
              if(count < 20 && count > 15) {
                discount = .9;
              }
              if(count > 20) {
                discount = .85;
              }
              total = discount * subtotal * 100; 
            }
              const body = {
                id: userId
              };
              const { stripeaccount, email } = await getUserPaymentIdAndEmail(body); 
              const charge = await stripe.charges.create({
              amount: Math.floor(total), // This is in cents
              currency: 'usd',
              source: `${stripeaccount}`,
              receipt_email: `${email}`, 
            });
            console.log('Charge customer', charge); 
              success('Successfully charge users in each pool order'); 
        } 
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
      let count; 
      let userId; 
      let businessId; 
      let discount; 
      let cart = [];  
      let total; 
      let location;  

      const poolIds = await client.smembersAsync('allPools')
        const pools = [];
        for (let i = 0; i < poolIds.length; i++) {
          let poolData = await client.hgetallAsync(poolIds[i]);
          count = poolData.count;
          businessId = poolData.bizId; 
          for (var key in poolData) {
            userId = key.split('d')[1]; 
          let allOrder = await client.hgetallAsync(poolData.bizId); 
          console.log('ALL ORDER', allOrder);
          for (var key in allOrder) {
            userId = key; //Will be in the format poolId:userId 
            let subtotal = 0;
            let order = JSON.parse(allOrder[key]);
              for (var item in order) {
                let quantity = JSON.parse(order[item])[1];
                let price = JSON.parse(order[item])[0];
                cart.push({quantity, item: item, price})
                subtotal += price * quantity;
              }
              if(count < 5) {
                discount = 1; 
              }
              if(count < 10 && count > 5) {
                discount = 1; 
              }
              if(count < 15 && count > 10) {
                discount = .95;
              }
              if(count < 20 && count > 15) {
                discount = .9;
              }
              if(count > 20) {
                discount = .85;
              }
              total = discount * subtotal; 
            }
          }
        }

      const order = new Order({
        userId: userId,
        businessId: businessId,
        createdAt: new Date(), //todays date 
        cart: JSON.stringify(cart),
        total: total, 
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
