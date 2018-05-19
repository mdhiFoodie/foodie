import express from 'express'; 

import {
  chatController 
} from './chatController'; 

const router = express.Router(); 

router.route('/messages') 
  .post(chatController.addMessages); 

export default router;
