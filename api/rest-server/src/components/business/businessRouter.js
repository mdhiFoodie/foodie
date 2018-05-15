import express from 'express';

import {
  saveDeliveryUser,
  getDeliveryTeam,
  getBusinessInfo
} from './businessControllers';

const router = express.Router();

router.route('/saveDeliveryUser')
  .post(saveDeliveryUser);

router.route('/getDeliveryTeam')
  .post(getDeliveryTeam);

router.route('/getInfoById/:id')
  .get(getBusinessInfo);

export default router;