import db from '../../config/databases/pg';
import { getStripeId } from "./paymentsSQLHelpers";
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
    console.log('HERE PAYLOAD', payload)
    const data = await db.query(query);
    console.log('data =>', data)
    success('stripeAccountQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    error('stripeAccountQuery - error= ', err);
    throw new Error(err);
  }
};