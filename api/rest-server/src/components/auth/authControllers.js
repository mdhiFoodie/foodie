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

export const signUpController = async (req, res) => {
  try {
    let row; 
    req.body.password = await hashPassword(req.body.password);
    if (req.body.type === 'business') {
      const { rows } = await signUpBusinessQuery(req.body);
      row = rows; 
      console.log('HERE ROWS', rows); 
    } else {
      const { rows } = await signUpQuery(req.body);
    }
    const { id, email } = row[0];
    console.log('HERE ROWS EMAIL', row[0]); 
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
  console.log('data from loginController', req);
  try {
    const { rows } = await loginQuery(req.body);
    console.log('this is our req.body after submitting login: ', rows)
    delete rows[0].password;
    const { id, email } = rows[0];
    success('loginController - successfully retrieved data ', rows[0]);
    const token = await generateToken(id, email);
    console.log('TOKEN?', token)
    rows[0].token = token;
    console.log('ROWSTOKEN?', rows[0].token)
    return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
  } catch (err) {
    error('loginController - error= ', err);
    throw new Error(err);
  }
};
