import client from '../../../redis/index.js' 

import { 
  success, 
  error 
} from '../../../../lib/log'; 

export const chatController = { 
  addMessages: async (req, res) => { 
    console.log('hello from add chat', req.body); 
    try { 
      const addNewMessage = await client.hset(req.body.userid, req.body.createdAt, JSON.stringify(req.body)) 
      success('chatController - successfully added messages to redis cart'); 
      return res.status(200).send('messages added'); 
    } 
    catch (err) { 
      console.log('error in adding chat messages', err) 
    } 
  }, 

  retrieveMessages: async (req, res) => { 
    try{ 
      console.log('hello this is retrieving messagesssss', req.params) 
      const getAllMessages = await client.hgetall(req.params.userid, (err, messages) => {
        if(err) {
          error('error retrieving messages', err);
        }
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



