import db from '../../config/databases/pg';
import {
  success, 
  error
} from '../../../../lib/log';
import {
  paymentsQuery,
  saveUserAccountQuery,
  saveCustomerPaymentId
} from './paymentsQueries'; 
import stripe from 'stripe'; 

export const verifyStripe = async (req, res) => {
  try {
    const { rows } = await paymentsQuery(req.body);
    //If it exist render pool else create account 
    if (rows[0].stripeaccount) {
      res.status(200).send('RenderPool'); 
    } else {
      res.status(200).send('CreateAccount');
    }
    success('verifyStripe - successfully retrieved data ', rows);
    } catch (err) {
    error('verifyStripe - error= ', err);
    throw new Error(err);
    }
};

export const createACustomAccount = async (req, res) => {
  const stripe = require('stripe')(process.env.SECRET_KEY); 
    try {
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


export const createCustomer = async (req, res) => {
  const stripe = require('stripe')(process.env.SECRET_KEY);
  try {
    const customer = await stripe.customers.create({
      description: `Customer for ${req.body.name}`,
      email: req.body.email,
      source: req.body.source 
    }); 
    const customerId = {
      paymentid: customer.id, 
      email:req.body.email 
    }
    const saveCustomer = await saveCustomerPaymentId(customerId);
    success('createCustomer - successfully update data ', saveCustomer);
    res.status(200).send('Success'); 
  } catch (err) {
    console.log('Error from paymentsController inside createCustomer', err);
  }
}