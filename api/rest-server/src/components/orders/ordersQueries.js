import db from '../../config/databases/pg';

import {
  success, 
  error
} from '../../../../lib/log'; 

export const gets = async (payload) => {
  try {
  
    success(' - successfully retrieved data', data); 
  } catch (err) {
    error(' - error =', err);
    throw new Error(err); 
  }
}