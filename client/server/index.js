const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, '../public')));

server.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
);

server.listen('1337', () =>
  console.log('serving static files on port ', '1337')
);
