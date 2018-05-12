import db from '../../config/databases/pg';
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  signUpHelper,
  loginHelper,
  businessSignUpHelper
} from './authSQLHelpers';
import {
  success,
  error
} from '../../../../lib/log';

export const signUpQuery = async (payload) => {
  try {
    const query = {
      text: signUpHelper,
      values: queryPayloadOrganizer(payload, ['name', 'phone', 'email', 'password', 'type'])
    }
    const data = await db.query(query);
    console.log('data from authQueries', data)
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const signUpBusinessQuery = async (payload) => {
  try {
    const query = {
      text: businessSignUpHelper,
      values: queryPayloadOrganizer(payload, ['businessname', 'address', 'contactname', 'phone', 'email', 'password', 'foodcategory', 'type'])
    }
    const data = await db.query(query);
    console.log('data from authQueries',data)
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const loginQuery = async (payload) => {
  try {
    console.log('PAYLOAD FROM LOGINQUERY',payload)
    const query = {
      text: loginHelper,
      values: queryPayloadOrganizer(payload, ['email'])
    }
    const data = await db.query(query);
    console.log('DATA FROM LOGIN', data)
      success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
