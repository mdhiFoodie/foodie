import express from 'express';

import { poolController } from './poolControllers';

const router = express.Router();

router
  .route('/checkForExistingPoolThenAddUser')
  .post(poolController.checkForExistingPoolThenAddUser);

router.route('/grabAllPools').get(poolController.grabAllPools);

router.route('/grabUsersPool/:userId').get(poolController.grabUsersPool);

router.route('/addUserToPool').post(poolController.addUserToPool);

export default router;
