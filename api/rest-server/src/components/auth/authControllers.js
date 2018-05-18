import db from '../../config/databases/pg';
import {
  signUpQuery,
  loginQuery,
  signUpBusinessQuery
} from './authQueries';
import {
  success,
  error
} from '../../../../lib/log';
import {
  generateToken
} from '../../middleware/auth/jwt'
import {
  hashPassword
} from '../../middleware/auth/bcrypt'

/**
 * Signup Controller 
 * 0 = user 
 * 1 = business
 * 2 = deliveryUser
 */

export const signUpController = async (req, res) => {
  console.log('REQ.BODY', req.body)
  try {
    let row; 
    req.body.password = await hashPassword(req.body.password);
    if (req.body.type === 0 || req.body.type === 2) {
      const { rows } = await signUpQuery(req.body);
      row = rows; 
    } else if (req.body.type === 1){
      const { rows } = await signUpBusinessQuery(req.body);
      row = rows;
    } 
    const { id, email } = row[0];
    success('signUpController - successfully retrieved data ', JSON.stringify(row[0]));
    const token = await generateToken(id, email);
    row[0].token = token;
    return res.status(200).append('authorization', JSON.stringify(token)).send(row[0]);
  } catch (err) {
    error('signUpController - error= ', err);
    throw new Error(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body);
    delete rows[0].password;
    const { id, email } = rows[0];
    success('loginController - successfully retrieved data ', rows[0]);
    const token = await generateToken(id, email);
    rows[0].token = token;
    return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
  } catch (err) {
    error('loginController - error= ', err);
    throw new Error(err);
  }
};
