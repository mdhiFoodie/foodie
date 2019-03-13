import client from '../../../redis/index.js' 

import { 
  success, 
  error 
} from '../../../../lib/log'; 

export const chatController = { 
  addMessages: async (req, res) => { 
    console.log('hello from add chat', req.body); 
    try { 
      const addNewMessage = await client.hset(req.body.poolid + 'user', req.body.createdAt, JSON.stringify(req.body)) 
      success('chatController - successfully added messages to redis cart'); 
      return res.status(200).send('messages added'); 
    } 
    catch (err) { 
      console.log('error in adding chat messages', err) 
    } 
  }, 

  retrieveMessages: async (req, res) => { 
    try{
      const getAllMessages = await client.hgetall(req.params.userid + 'user', (err, messages) => {
        if(err) {
          error('error retrieving messages', err);
        }
        console.log('what\'re my messages', messages);
        return res.status(200).send(messages)
      })
      success('chatController - successfully retrieves all messages from redis cart')
    } 
    catch (err) { 
      error('chat controller - grab message error = ', err)
      console.log('error in getting messages', err) 
    } 
  } 
};