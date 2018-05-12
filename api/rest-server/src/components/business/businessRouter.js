import express from 'express';

import {
  saveDeliveryUser
} from './businessControllers';

const router = express.Router();

router.route('/saveDeliveryUser')
  .post(saveDeliveryUser);

export default router;