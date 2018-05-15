import db from '../../config/databases/pg'; 
import {
  success, 
  error
} from '../../../../lib/log/index';
import { globalController } from '../../lib/components'; 
import { signUpBusinessDeliveryQuery } from '../auth/authQueries'; 
import { getDeliveryListForBusinesses } from './businessQueries'; 
import { getBusinessInfoQuery } from './businessQueries'; 


export const saveDeliveryUser = globalController(signUpBusinessDeliveryQuery, 'saveDeliveryUser'); 

export const getDeliveryTeam = async (req, res) => {
  try {
    const { rows } = await getDeliveryListForBusinesses (req.body);
    return res.status(200).send(rows); 
  } catch (err) {
    error('getDeliveryTeam - error =', err);
    throw new Error(err);
  }
}

export const getBusinessInfo = async (req, res) => {
  try {
    console.log('this is req.body: ', req.params)
    const { rows } = await getBusinessInfoQuery(req.params);
    console.log('this is ROWS: ', rows)
    return res.status(200).send(rows); 
  } catch (err) {
    error('getDeliveryTeam - error =', err);
    throw new Error(err);
  }
}