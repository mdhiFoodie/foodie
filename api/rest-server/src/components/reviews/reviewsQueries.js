import db from '../../config/databases/pg';
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  addReviewHelper, getReviewsHelper
} from './reviewsSQLHelpers'; 

import {
  success, 
  error
} from '../../../../lib/log'; 

export const addReviewQuery = async (payload) => {
  try {
    const query = {
      text: gettingDeliveryTeam,
      values: queryPayloadOrganizer(payload, ['id_businesses'])
    }
    const data = await db.query(query);
      success('addReviewsQuery - successfully retrieved data', data); 
    return data;  
  } catch (err) {
    error('addReviewsQuery - error =', err);
    throw new Error(err); 
  }
}

export const getReviewsQuery = async (payload) => {
  try {
    const query = {
      text: getReviewsHelper,
      values: queryPayloadOrganizer(payload, ['id'])
    }
    const data = await db.query(query);
      success('getReviewsQuery - successfully retrieved data', data); 
    return data;  
  } catch (err) {
    error('getReviewsQuery - error =', err);
    throw new Error(err); 
  }
}