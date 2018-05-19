import client from '../../../redis/index.js' 

import { 
  success, 
  error 
} from '../../../../lib/log'; 

export const chatController = { 
  addMessages: async (req, res) => { 
    try { 
      console.log('hello from add chat', req.body); 
      const addNewMessage = await client.hset(req.body.userid, req.body.createdAt, JSON.stringify(req.body)) 
      success('chatController - successfully added messages to redis cart'); 
      return res.status(200).send('messages added'); 
    } 
    catch (err) { 
      console.log('error in adding chat messages', err) 
    } 
  }, 

  getMessages: async (req, res) => { 
    try{ 
      console.log('hello') 
    } 
    catch (err) { 
      console.log('error in getting messages', err) 
    } 
  } 
};
