import express from 'express';

import {
  getDeliveryTeam
} from './businessControllers';

const router = express.Router();

router.route('/getDeliveryTeam')
  .get(getDeliveryTeam);

export default router;