import express from 'express';

import {
  saveDeliveryUser,
  getDeliveryTeam
} from './businessControllers';

const router = express.Router();

router.route('/saveDeliveryUser')
  .post(saveDeliveryUser);

router.route('/getDeliveryTeam')
  .post(getDeliveryTeam);

export default router;