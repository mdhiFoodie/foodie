import http from 'http';

import App from './config/express';
import { success } from '../../lib/log';


import {
  chargeUser
} from '../cron/cronController.js'; 

const app = App.express; 

const server = http.createServer(app); 
const PORT = process.env.PORT; 


server.listen(PORT, (err) => {
  if (err) {
    throw err; 
  }
  console.log(`Successfully connected to port ${PORT}`); 
});

// chargeUser.start(); 

server.on('error', () => {
  server.close(
    setTimeout(server.listen((PORT, () => success('successfully rebooted server!'))), 1000)
  );
});
