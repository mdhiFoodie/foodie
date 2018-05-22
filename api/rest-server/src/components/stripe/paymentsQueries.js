import db from '../../config/databases/pg';
import { 
  getStripeId, 
  saveUserStripeAccount,
  saveCustomerId
} from "./paymentsSQLHelpers";
import { queryPayloadOrganizer } from '../../lib/components/util';
import {
  success, 
  error
} from '../../../../lib/log';


export const paymentsQuery = async (payload) => {
  try {
    const query = {
      text: getStripeId,
      values: queryPayloadOrganizer(payload, ['email'])
    }
    const data = await db.query(query);
    success('stripeAccountQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('stripeAccountQuery - error= ', err);
    throw new Error(err);
  }
};

export const saveUserAccountQuery = async (payload) => {
  try {
    const query = {
      text: saveUserStripeAccount,
      values: queryPayloadOrganizer(payload, ['stripeAccount', 'email'])
    }
    const data = await db.query(query); 
    success('saveUserAccountQuery - successfully save account id');
    return data; 
  } catch (err) {
    error('stripeAccountQuery - error= ', err);
    throw new Error(err); 
  }
}

export const saveCustomerPaymentId = async (payload) => {
  try {
    const query = {
      text: saveCustomerId,
      values: queryPayloadOrganizer(payload, ['paymentid', 'email'])
    }
    const data = await db.query(query); 
    success('saveUserAccountQuery - successfully save account id');
    return data; 
  } catch (err) {
    error('stripeAccountQuery - error= ', err);
    throw new Error(err); 
  }
}

