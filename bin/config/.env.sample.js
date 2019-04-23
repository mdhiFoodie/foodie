const envBuild = {
  '.': [
    //configs server logs foodie/server/lib/log/index.js
    'DEBUG=TRUE',
    // bcrypt salt
    'SALT_ROUNDS=10',
    // jwt token secret
    'TOKEN_SECRET=foodiepop',
    //postgresdb info
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=foodie',
    'LOCAL_PASSWORD=',
    'LOCAL_PORT=5432',
    // stripe api keys
    'PUBLISHABLE_KEY=pk_test_z4MoEuHo0RIJC8oV0K6xhsO1',
    'SECRET_KEY=sk_test_kdtaI00u2u9E7TmyGpdUv7HK',
    // if NODE_ENV === 'production' will switch to these for postgresdb
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_DATABASE=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    // or PRODUCTION for webpack change
    'NODE_ENV=DEVELOPMENT',
    'GOOGLE=',
    // ports
    'STATIC_SERVER=1337',
    'API_SERVER=3000',
    'SOCKET_SERVER=4000',
  ],
};

module.exports = envBuild;
