import client from '../../../redis/index.js'

import {
  success,
  error
} from '../../../../lib/log';


export const cartController = async (req, res) => {
  try {
   
    const userId = req.body.userId
    const item = req.body.item
    const quantity = req.body.quantity
    const addedItem = await client.hset(userId, item, quantity);
    success('cartController - successfully added item to redis cart');
    return res.status(200).send('item added');
  
  } catch (err) {
    error('cartController - error= ', err);
    throw new Error(err);
  }
};

