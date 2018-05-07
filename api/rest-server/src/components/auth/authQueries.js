import db from '../../config/databases/pg';
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  signUpHelper,
  userLoginHelper
} from './authSQLHelpers';
import {
  success,
  error
} from '../../../../lib/log';

export const signUpQuery = async (payload) => {
  try {
    const query = {
      text: signUpHelper,
      values: queryPayloadOrganizer(payload, ['email', 'username', 'password'])
    }
    const data = await db.query(query);
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const loginQuery = async (payload) => {
  try {
    const query = {
      text: userLoginHelper,
      values: queryPayloadOrganizer(payload, ['email'])
    }
    console.log('query', query);
    const data = await db.query(query);
      success('loginQuery - successfully retrieved data ', data);
    // return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
