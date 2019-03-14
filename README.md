# foodie

foodie is an application that allows users to group their food delivery into bigger orders enabling them to receive greater discounts as the geolocation based 'bulk' order grows

## dependencies

- `brew install postgresql`
- `brew install redis`

## Setup environment

- `yarn`
- `yarn buildEnv`

### Start the api servers

- `yarn start:rest-server`
- `yarn start:socket-server`

### Setup postgresql

- `brew services start postgresql`
- `createuser root`
- `createdb foodie`
- `yarn db:setup:rest-server`
- `psql foodie`

### Setup Mongo

- `mongod`
- `yarn db:setup:mongodb`
- `yarn db:seed:mongodb`
- `mongo`

### Redis

- `redis-server`
- `yarn db:setup:redis`
- `redis-cli`

### Start the ui servers

- `yarn start:server`

### webpack bundle

- `yarn build`
