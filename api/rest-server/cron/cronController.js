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


const seedRedis = new cron.CronJob({
  cronTime: '* * * * * *', 
  onTick: async () => {
    try {
      await client.hmset('poolId13',
        'bizId', 1, 'bizName', 'Michael Cheese', 'longitude', 33.9759755, 'latitude', -118.3908877, ('userId' + 3), 3);
      // await client.geoadd('bizId' + 1, 33.9759755, -118.3908877, 'poolId13');      
      await client.set(3, 'poolId13');

      await client.hmset('poolId23',
      'bizId', 2, 'bizName', 'Wine Cheese Bakery', 'longitude', 33.9759755, 'latitude', -118.3908877, ('userId' + 3), 3);
      // await client.geoadd('bizId' + 1, 33.9759755, -118.3908877, 'poolId13');      
      await client.set(3, 'poolId23');

      await client.hmset('poolId33',
      'bizId', 3, 'bizName', 'Daniels Korean BBQ', 'longitude', 33.9759755, 'latitude', -118.3908877, ('userId' + 3), 3);
      // await client.geoadd('bizId' + 1, 33.9759755, -118.3908877, 'poolId13');      
      await client.set(3, 'poolId33');
      success('cronController - successfully added pool to redis pool');
    } catch(err) {
      error('Not able to seed Redis', err); 
    }
  }, 
  start: false, 
  timeZone: 'America/Los_Angeles'
}); 

const chargeUser = new cron.CronJob({
  cronTime: '* * * * * *',
  onTick: async () => {
    try {
      let count; 
      let discount;  
      let userId; 
      let total; 
      let closesAt = new Date();
      const poolIds = await client.smembersAsync('allPools' + closesAt.getDate().toString());
        const pools = [];
        for (let i = 0; i < poolIds.length; i++) {
          let poolData = await client.hgetallAsync(poolIds[i]);
          count = poolData.count; 

          let allOrder = await client.hgetallAsync(poolData.bizId); 
          for (var key in allOrder) {
            userId = key.split(':')[1]; //Will be in the format poolId:userId 
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
      let closesAt = new Date();
      const poolIds = await client.smembersAsync('allPools' + closesAt.getDate().toString());
        const pools = [];
        for (let i = 0; i < poolIds.length; i++) {
          let poolData = await client.hgetallAsync(poolIds[i]);
          console.log('Pool data', poolData)
          count = poolData.count;
          businessId = poolData.bizId; 
          for (var key in poolData) {
            userId = key.split('d')[1]; 
          let allOrder = await client.hgetallAsync(poolData.bizId); 
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
        businessName: '',
        createdAt: new Date(), //todays date 
        cart: JSON.stringify(cart),
        total: total, 
        location: '',
        count: count //We dont have their location? 
      });

      // const order = new Order({
      //   userId: 3,
      //   businessId: 1,
      //   businessName: 'Michael Cheese',
      //   createdAt: new Date(), //todays date 
      //   cart: "[{\"quantity\":1,\"item\":\"Cheese a La Mexicana\",\"price\":\"14\"}]",
      //   total: 1400, 
      //   location: '6060 Center Dr Culver City CA',
      //   count: 5 //We dont have their location? 
      // });

      // const order1 = new Order({
      //   userId: 3,
      //   businessId: 2,
      //   businessName: 'Wine Cheese Bakery',
      //   createdAt: new Date(), //todays date 
      //   cart: "[{\"quantity\":1,\"item\":\"Cheese a La Mexicana\",\"price\":\"14\"}]",
      //   total: 1400, 
      //   location: '6060 Center Dr Culver City CA',
      //   count: 11 //We dont have their location? 
      // });

      // const order2 = new Order({
      //   userId: 3,
      //   businessId: 3,
      //   businessName: 'Daniels Korean BBQ',
      //   createdAt: new Date(), //todays date 
      //   cart: "[{\"quantity\":1,\"item\":\"Cheese a La Mexicana\",\"price\":\"14\"}]",
      //   total: 1400, 
      //   location: '6060 Center Dr Culver City CA',
      //   count: 1 //We dont have their location? 
      // });
      // const saveOrders = await order.save(); 
      // const saveOrders1 = await order1.save(); 
      // const saveOrders2 = await order2.save(); 
      success('Successfully save each order '); 
    } catch(err) {
      error('Failed saving order history from cronController error= ', err); 
    }
  },
  start: false, 
  timeZone: 'America/Los_Angeles'
});



module.exports = {
  chargeUser, 
  userOrderHistory, 
  seedRedis
}
