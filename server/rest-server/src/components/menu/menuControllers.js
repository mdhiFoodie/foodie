import Menus from '../../config/databases/mongo/menuModel';

import {
  success,
  error
} from '../../../../lib/log';


export const menuController = async (req, res) => {
  try {
    const data = await Menus.find(req.params)
    const { menu } = data[0];
    success('menuController - successfully retrieved data ', menu);
    return res.status(200).send(menu);
  
  } catch (err) {
    error('menuController - error= ', err);
    throw new Error(err);
  }
};

