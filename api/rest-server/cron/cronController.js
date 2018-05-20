const cron = require('cron');  
const stripe = require('stripe')(process.env.SECRET_KEY); 
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
  cronTime: '* * * * * *',
  onTick: async () => {
    try {
//look for users ID and return email and paymentid on redis? 
//Case: if for some reason user doesn't have paymentid ? 
      // client.smembers('allPools', async (err, poolIds) => {
      //   if (err) {
      //     error('error grabbing poolIds')
      //   }
      //   const pools = [];
  
      //   for (let i = 0; i < poolIds.length; i++) {
      //     const poolData = await client.hgetallAsync(poolIds[i]);
      //     pools.push(poolData);
      //   }
      //     console.log('Pools from cron worker', pools);
      //     // return res.status(200).send(pools);
      // });
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


module.exports = {
  chargeUser
}
