import { createClient, print } from "redis";
const client = createClient();


client.on('connect', function() {
  console.log('redis done did connected');
});

client.on('error', function(err){
  console.log('Something went wrong ', err)
});


client.set('my test key', 'my test value', print);
client.get('my test key', function(error, result) {
  if (error) throw error;
  console.log('GET result ->', result)
});

module.exports = client;