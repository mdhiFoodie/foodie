import { createServer } from 'http';
import SocketIo from 'socket.io';

const server = createServer();
const io = SocketIo(server);

io.on('connection', socket => {
  console.log(`Connected ${socket.id}`);
  socket.on('join', room => {
    socket.join(room.poolid);
  });
  socket.on('leave', room => {
    socket.leave(room);
  });
  socket.on('sendChat', data => {
    io.sockets.in(data.poolid).emit('sendChat', data.message);
  });
});

server.listen('4000', () => {
  console.log(`Listening on port 4000`);
});

export default io;
