import express from 'express';

import {
  cartController, cartAddController
} from './cartControllers';

const router = express.Router();

router.route('/addItem')
  .post(cartAddController.addItem);

router.route('/getCart/:userId')
  .get(cartAddController.getCart);  


export default router;