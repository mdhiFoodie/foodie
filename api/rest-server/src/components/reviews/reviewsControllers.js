import db from '../../config/databases/pg'; 
import {
  success, 
  error
} from '../../../../lib/log/index';
import { globalController } from '../../lib/components'; 
import { addReviewQuery } from './reviewsQueries'; 
import { getReviewsQuery } from './reviewsQueries'; 


export const addReview = globalController(addReviewQuery, 'addReview'); 

export const getReviews = async (req, res) => {
  try {
    console.log('this is req.params: ', req.params)
    const { rows } = await getReviewsQuery(req.params);
    return res.status(200).send(rows); 
  } catch (err) {
    error('getReviews - error =', err);
    throw new Error(err);
  }
}