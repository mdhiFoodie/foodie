import db from '../../config/databases/pg'; 
import {
  success, 
  error
} from '../../../../lib/log/index';
import { globalController } from '../../lib/components'; 
import { signUpBusinessDeliveryQuery } from '../auth/authQueries'; 


export const saveDeliveryUser = globalController(signUpBusinessDeliveryQuery, 'saveDeliveryUser'); 

