const Orders = require('../../config/databases/mongo/orders/ordersModel')
import {
  success,
  error
} from '../../../../lib/log';


export const getUserOrderHistory = async (req, res) => {
  try {
    const getOrder = await Orders.find({userId: req.body.userId}); 
    success('Orders for customer = ', getOrder)

    // success('menuController - successfully retrieved data ');
    return res.status(200).send(getOrder);
  
  } catch (err) {
    error('ordersController - error= ', err);
    throw new Error(err);
  }
};

