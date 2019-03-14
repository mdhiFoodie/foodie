import db from '../../config/databases/pg';
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  gettingDeliveryTeam, gettingBusinessInfoQuery
} from './businessSQLHelpers'; 

import {
  success, 
  error
} from '../../../../lib/log'; 

export const getDeliveryListForBusinesses = async (payload) => {
  try {
    const query = {
      text: gettingDeliveryTeam,
      values: queryPayloadOrganizer(payload, ['id_businesses'])
    }
    const data = await db.query(query);
      success('getDeliveryList - successfully retrieved data', data); 
    return data;  
  } catch (err) {
    error('businessQuery - error =', err);
    throw new Error(err); 
  }
}

export const getBusinessInfoQuery = async (payload) => {
  try {
    const query = {
      text: gettingBusinessInfoQuery,
      values: queryPayloadOrganizer(payload, ['id'])
    }
    const data = await db.query(query);
      success('getBusinessInfo - successfully retrieved data', data); 
    return data;  
  } catch (err) {
    error('businessQuery - error =', err);
    throw new Error(err); 
  }
}