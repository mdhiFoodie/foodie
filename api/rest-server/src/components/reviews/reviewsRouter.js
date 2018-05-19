import express from 'express';

import {
  addReview,
  getReviews,
} from './reviewsControllers';

const router = express.Router();

router.route('/addReview')
  .post(addReview);

router.route('/getReviews/:id')
  .get(getReviews);

export default router;