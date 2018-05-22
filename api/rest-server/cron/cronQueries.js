import db from '../src/config/databases/pg'; 
import { queryPayloadOrganizer } from '../src/lib/components/util';
import {
  getUserInfoForCharge
} from './cronSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const getUserPaymentIdAndEmail = async (payload) => {
  try {
    const query = {
      text: getUserInfoForCharge,
      values: queryPayloadOrganizer(payload, ['id'])
    }
    const { rows } = await db.query(query);
    success('getUserPaymentIdAndEmail - successfully retrieved data ', rows);
    return rows[0];
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};
