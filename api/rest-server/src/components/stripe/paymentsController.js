import db from '../../config/databases/pg';
import {
  success, 
  error
} from '../../../../lib/log';
import {
  paymentsQuery,
  saveUserAccountQuery
} from './paymentsQueries'; 
import stripe from 'stripe'; 

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

export const createACustomAccount = async (req, res) => {
  const stripe = require('stripe')(process.env.SECRET_KEY); 
    try {
      console.log('REQ.BODY', req.body)
      const data = await stripe.accounts.create({
        type: 'custom', 
        country: 'US',
        email: req.body.email,
        account_token: req.body.account_token
      }); 
      const userAccount = {
        stripeAccount: data.id,
        email: req.body.email
      }
      const saveNewAccount = await saveUserAccountQuery(userAccount); 
      return res.status(200).send('Success'); 
    } catch (err) {
      console.log('Error from paymentsController inside createCustomAccount -', err); 
    }
}


