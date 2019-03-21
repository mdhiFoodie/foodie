const http = require('http');
const SocketIo = require('socket.io');

const server = http.createServer();
export const io = SocketIo(server);

const rooms = [];
const usernames = {};
let counter = 1;

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

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
