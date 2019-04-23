import express from 'express';

import {
  menuController
} from './menuControllers';

const router = express.Router();

router.route('/menuGet/:biz_id')
  .get((menuController));


export default router;