const App = require('./config/express'); 
const http = require('http'); 

const app = App.express; 

const server = http.createServer(app); 
const PORT = process.env.PORT; 

app.listen(PORT, (err) => {
  if (err) {
    throw err; 
  }
  console.log(`Successfully connected to port ${PORT}`); 
});

server.on('error', () => {
  server.close(
    setTimeout(server.listen((PORT, () => success('successfully rebooted server!'))), 1000)
  );
});

