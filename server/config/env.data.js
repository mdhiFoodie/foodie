/**
 * Data to create env files in each directory containing the following variables
 * 
 */

  const envBuild = {
    'rest-server': [
      'DEBUG=TRUE',
      'NODE_ENV=test',      
      'PORT=3000',
      'SALT_ROUNDS=10',
      'TOKEN_SECRET=foodiepop',
      'LOCAL_USER=root',
      'LOCAL_HOST=localhost',
      'LOCAL_DATABASE=foodie',
      'LOCAL_PASSWORD=',
      'LOCAL_PORT=5432',
      'PUBLISHABLE_KEY=pk_test_z4MoEuHo0RIJC8oV0K6xhsO1',
      'SECRET_KEY=sk_test_kdtaI00u2u9E7TmyGpdUv7HK',
      'AWS_USER=',
      'AWS_HOST=',
      'AWS_DATABASE=',
      'AWS_PASSWORD=',
      'AWS_PORT=',
    ], 
    'socket-server': [
      'PORT=4000'
    ]
  }

  module.exports = envBuild; 