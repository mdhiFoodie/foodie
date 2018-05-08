import db from '../../config/databases/pg';
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  signUpHelper,
  loginHelper
} from './authSQLHelpers';
import {
  success,
  error
} from '../../../../lib/log';

export const signUpQuery = async (payload) => {
  try {
    const query = {
      text: signUpHelper,
      values: queryPayloadOrganizer(payload, ['name', 'phone', 'email', 'password'])
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
  console.log('HERE IS PAYLOAD',payload)
  try {
    const query = {
      text: loginHelper,
      values: queryPayloadOrganizer(payload, ['email'])
    }
    console.log('query.text', query.text);
    console.log('payload', queryPayloadOrganizer(payload, ['email']));
    const data = await db.query(query);
    // console.log('DATA BACK FROM DB', data.rows); 
      success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
