import express from 'express';
import { join, resolve } from 'path';

const server = express();

server.use(express.static(join(__dirname, '../public')));

server.get('*', (req, res) =>
  res.sendFile(resolve(__dirname, '../public/index.html'))
);

server.listen('1337', () =>
  console.log('serving static files on port ', '1337')
);
