import http from 'http';
import SocketIo from 'socket.io';

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  console.log(`Connected ${client.id}`);
});

const PORT = process.env.PORT; 

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})