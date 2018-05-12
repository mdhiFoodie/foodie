import express from 'express';

import {
  searchRestaurantsController
} from './searchRestaurantsController.js';

const router = express.Router();

router.route(`/feed/searchRestaurants/:foodcategory`)
  .get(searchRestaurantsController)

export default router;