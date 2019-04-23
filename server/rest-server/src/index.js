import http from 'http';

import App from './config/express';
import { success } from '../../lib/log';

//used to demo chron job
// import {
//   chargeUser,
//   userOrderHistory,
//   seedRedis,
// } from '../cron/cronController.js';

const app = App.express;

const server = http.createServer(app);

server.listen('3000', err => {
  if (err) {
    throw err;
  }
  console.log(`Successfully connected to port 3000`);
});

// // CRON JOBS
// chargeUser.start();
// userOrderHistory.start();
// seedRedis.start();

server.on('error', () => {
  server.close(
    setTimeout(
      server.listen(('3000', () => success('successfully rebooted server!'))),
      1000
    )
  );
});
