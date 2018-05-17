import db from '../../config/databases/pg';
import {
  success, 
  error
} from '../../../../lib/log';
import {
  paymentsQuery
} from './paymentsQueries'; 

export const verifyStripe = async (req, res) => {
  try {
    const { rows } = await paymentsQuery(req.body);
    success('verifyStripe - successfully retrieved data ', rows);
    if (rows[0].stripeaccount) {
      //charge customer 
    }
    res.status(200).send(rows[0]); 
    } catch (err) {
    error('verifyStripe - error= ', err);
    throw new Error(err);
    }
};






//This will get the users information and check if it has a stripe account 
/**
 * type is custom or standard 
 * pass from the front end:
 * country code 
 * users email
 */
// module.exports = (app) => {
//   app.post('/api/stripe/account/get', (req, res, next) => {
//     const stripeAccountId = null; 
//     if(!stripeAccountId) {
//       res.send({
//         success: true, 
//         message: 'missing stripe account',
//         setuBegan: false 
//       }); 
//     } else {
//       res.send({
//         succes: true,
//         message: 'stripe account',
//         setuBegan: false        
//       });
//     }
//   });
// }