# foodie api 


#Get Started: 

#Setup environment (must be in api directory)
yarn 
yarn buildEnv 
yarn setup:rest-server
yarn setup:socket-server


#Start the Servers

yarn start:rest-server 
yarn start:socket-server

# Install && Setup postgresql

brew install postgresql
brew services start postgresql
createuser root

createdb foodie
psql foodie
yarn db:setup:rest-server

# Setup Mongo

1. mongod
2. mongo
3. yarn db:setup:mongodb
4. yarn db:seed:mongodb

# Redis

brew install redis

redis-server

node rest-server/redis/index.js

redis-cli
