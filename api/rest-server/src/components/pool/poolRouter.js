import express from 'express';

import {
 poolController
} from './poolControllers';

const router = express.Router();

router.route('/addPool')
  .post(poolController.addPool);

  router.route('/addUserToPool')
  .post(poolController.addUserToPool);


export default router;