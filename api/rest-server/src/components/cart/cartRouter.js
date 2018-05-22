import express from 'express';

import {
 cartController
} from './cartControllers';

const router = express.Router();

router.route('/addItem')
  .post(cartController.addItem);

  router.route('/deleteItem')
  .delete(cartController.deleteItem);

router.route('/getCart/:userId')
  .get(cartController.getCart);  

router.route('/sendOrder')
  .post(cartController.sendOrder);

router.route('/grabBizOrders/:bizId')
  .get(cartController.grabBizOrders); 



export default router;