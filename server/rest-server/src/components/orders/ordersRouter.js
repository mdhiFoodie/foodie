import express from 'express';

import {
  getUserOrderHistory
} from './ordersController';

const router = express.Router();

router.route('/getUserHistory')
  .post(getUserOrderHistory);


export default router;