import express from 'express'; 

import {
  verifyStripe,
  createACustomAccount, 
  createCustomer
} from './paymentsController'; 

const router = express.Router();

router.route('/verifyStripeToken')
  .post(verifyStripe);

router.route('/createAccount') 
  .post(createACustomAccount);

router.route('/createCustomerId') 
  .post(createCustomer);

export default router; 