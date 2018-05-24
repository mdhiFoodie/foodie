const http = require('http');
const SocketIo = require('socket.io');

const server = http.createServer();
export const io = SocketIo(server);

const rooms = [];
const usernames = {};
let counter = 1;

io.on('connection', socket => {
  // console.log('what is socket', socket)
  console.log(`Connected ${socket.id}`);
  // socket.on('messages', (message) => {
  //   console.log('this is getting messages: ', message);
  //   console.log('this is the actual message: ', message.message)
  //   io.emit('messages', message.message)
  // });
  socket.on('join', (room) => {
    console.log('joining room', room);
    socket.join(room.poolid);
  });
  socket.on('leave', (room) => {
    console.log('leaving room', room);
    socket.leave(room);
  });
  socket.on('sendChat', (data) => {
    console.log('sendChat for data', data);
    io.sockets.in(data.poolid).emit('sendChat', data.message)
  })
  // socket.on('addUser', (username) => {
  //   console.log('this is signing up users', username);
  //   io.emit('addUser', (username) => {
  //     socket.username = username;
  //     console.log(username + ' has logged in');

  //     socket.room = rooms.push(counter)
  //     counter++;

  //     usernames[username] = socket.username;

  //     socket.join(socket.room);

  //     //emit to socket that hes joined a room
  //     updatesocket(socket, username, socket.room);

  //     updateChatRoom(socket, 'connected');
      
  //     //TODO : Add updating the room list
  //   });

    //send message back and forth
    // socket.on('sendChat', (data) => {
    //   console.log(socket.username + ' sent a message');
    //   io.sockets.in(socket.room).emit('updateChat', socket.username, data);
    // });

    //SWITCH ROOM CODE GOES HERE

    // socket.on('disconnect', () => {
    //   delete usernames[socket.username];

    //   io.sockets.emit('updateUsers', usernames);

    //   updateGlobal(socket, 'disconnected');
      
    //   socket.leave(socket.room);

    // })
  // })
});

// const updatesocket = (socket, username, newRoom) => {
//   socket.emit('updateChat', 'SERVER', 'You\'ve connected ' + newRoom);
// };

// const updateChatRoom = (socket, message) => {
//   socket.broadcast.to(socket.room).emit('updateChat', 'SERVER', socket.username + ' has ' + message);
// };

// const updateGlobal = (socket, message) => {
//   socket.broadcast.emit('updateChat', 'SERVER', socket.username + ' have ' + message);
// }

const PORT = process.env.PORT; 

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})