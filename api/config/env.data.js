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
      'LOCAL_USER=poursh',
      'LOCAL_HOST=localhost',
      'LOCAL_DATABASE=foodie',
      'LOCAL_PASSWORD=',
      'LOCAL_PORT=5432',
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