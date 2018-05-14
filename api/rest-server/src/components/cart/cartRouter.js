import express from 'express';

import {
 cartAddController
} from './cartControllers';

const router = express.Router();

router.route('/addItem')
  .post(cartAddController.addItem);

router.route('/getCart/:userId')
  .get(cartAddController.getCart);  

router.route('/sendOrder')
  .post(cartAddController.sendOrder);

router.route('/grabBizOrders/:bizId')
  .get(cartAddController.grabBizOrders); 



export default router;