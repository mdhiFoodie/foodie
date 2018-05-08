import express from 'express';

import {
  searchRestaurantsController
} from './searchRestaurantsController.js';

const router = express.Router();

router.route(`/feed/searchRestaurants/:businessname`)
  .get(searchRestaurantsController)

export default router;