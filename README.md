# foodie

# Get rid of Bundle 

git rm -r --cached . 
git rm -r YOUR_FILE_NAME -f 


# API SETUP 


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

mongod
mongo
yarn db:setup:mongodb
yarn db:seed:mongodb

# Redis

brew install redis
redis-server
node rest-server/redis/index.js
redis-cli

# UI SETUP

#Get Started

#Setup environment (must be in ui directory)
yarn
yarn buildEnv 
yarn setup:server
yarn setup:client

#Start the Servers

yarn build
yarn start:server