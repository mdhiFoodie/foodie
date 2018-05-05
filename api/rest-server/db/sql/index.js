const db = require('mysql');

const dbConnection = db.createConnection({

  user: 'root',
  password: '',
  database: 'foodie',
  server: 'localhost',
  port: 3306

});

dbConnection.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected to db!');
});

// export default dbConnection;