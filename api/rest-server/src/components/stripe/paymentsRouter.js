import express from 'express'; 

import {
  verifyStripe,
  createACustomAccount
} from './paymentsController'; 

const router = express.Router();

router.route('/verifyStripeToken')
  .post(verifyStripe);

router.route('/createAccount') 
  .post(createACustomAccount)


export default router; 