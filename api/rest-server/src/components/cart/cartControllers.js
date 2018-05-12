import client from '../../../redis/index.js'

import {
  success,
  error
} from '../../../../lib/log';


export const cartAddController = {
  addItem: async (req, res) => {
  try {
   
    const userId = req.body.userId;
    const item = req.body.item;
    const quantity = req.body.quantity;
    const addedItem = await client.hset(userId, item, quantity);
    success('cartController - successfully added item to redis cart');
    return res.status(200).send('item added');
  
  } catch (err) {
    error('cartController - error= ', err);
    throw new Error(err);
  }
},

getCart: async (req, res) => {
  try {
     await client.hgetall(req.params.userId, (err, cart) => {
      if(err) {
        error('error retrieving cart', err);
      }
      return res.status(200).send(cart);
    });
    success('cartController - successfully grabbed redis cart');
  
  } catch (err) {
    error('cartController - grab cart error= ', err);
    throw new Error(err);
  }
},

sendOrder: async (req, res) => {
  try {   
    const bizId = req.body.bizId
    const userId = req.body.userId
    const order = req.body.order
    const addedItem = await client.hset(bizId, userId, order);
    success('cartController - successfully added order to the redis');
    return res.status(200).send('woo order happened');
  
  } catch (err) {
    error('cartController - order error= ', err);
    throw new Error(err);
  }
},

grabBizOrders: async (req, res) => {
  try {
     await client.hgetall(req.params.bizId, (err, orders) => {
      if(err) {
        error('error retrieving orders', err);
      }
      return res.status(200).send(orders);
    });
    success('cartController - successfully grabbed orders');
  
  } catch (err) {
    error('cartController - grab orders error= ', err);
    throw new Error(err);
  }
},
}
