const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT

server.use(express.static(path.join(__dirname, '../client/public')));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

server.listen(PORT, () => console.log('serving static files on port ', PORT));
