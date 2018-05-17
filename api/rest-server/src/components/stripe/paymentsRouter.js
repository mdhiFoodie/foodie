import express from 'express'; 

import {
  verifyStripe
} from './paymentsController'; 

const router = express.Router();

router.route('/verifyStripeToken')
  .post(verifyStripe);

export default router; 