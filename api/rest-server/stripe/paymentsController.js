
//This will get the users information and check if it has a stripe account 
/**
 * type is custom or standard 
 * pass from the front end:
 * country code 
 * users email
 */
module.exports = (app) => {
  app.post('/api/stripe/account/get', (req, res, next) => {
    const stripeAccountId = null; 
    if(!stripeAccountId) {
      res.send({
        success: true, 
        message: 'missing stripe account',
        setuBegan: false 
      }); 
    } else {
      res.send({
        succes: true,
        message: 'stripe account',
        setuBegan: false        
      });
    }
  });
}

