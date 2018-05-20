const cron = require('cron');

const chargeUser = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    const charge = stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  });
  },
  start: true,
  timeZone: 'America/Los_Angeles'
});



module.exports = {

}

/**
 * CRON JOB
 * 
 * Grab all the pool order ID from redis 
 * For each pool order 
 */