/**
 * Data to create env files in each directory containing the following variables
 * 
 */

  const envBuild = {
    'rest-server': [
      'PORT=3000',
      'SALT_ROUNDS=10',
      'TOKEN_SECRET=foodiepop',
    ], 
    'socket-server': [
      'PORT=4000'
    ]
  }

  module.exports = envBuild; 