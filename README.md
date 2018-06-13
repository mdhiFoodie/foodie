# foodie

## dependencies

* `brew install postgresql`
* `brew install redis`

## API SETUP

## Setup environment (must be in api directory)

* `yarn`
* `yarn buildEnv`
* `yarn setup:rest-server`
* `yarn setup:socket-server`

### Start the api servers

* `yarn start:rest-server`
* `yarn start:socket-server`

### Install & Setup postgresql

* `brew services start postgresql`
* `createuser root`
* `createdb foodie`
* `psql foodie`
* `yarn db:setup:rest-server`

### Setup Mongo

* `mongod`
* `mongo`
* `yarn db:setup:mongodb`
* `yarn db:seed:mongodb`

### Redis

* `redis-server`
* `node rest-server/redis/index.js`
* `redis-cli`

## UI SETUP

### Setup environment (must be in ui directory)

* `yarn`
* `yarn buildEnv`
* `yarn setup:server`
* `yarn setup:client`

### Start the ui servers

* `yarn build`
* `yarn start:server`