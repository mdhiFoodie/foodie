import express from 'express';

import {
  cartController
} from './cartControllers';

const router = express.Router();

router.route('/addItem')
  .post(cartController);

// router.route('/getCart')
//   .get(cartController.get);  


export default router;