const envBuild = {
  'server': [
    'PORT=1337'
  ],
  'client': [
    'NODE_ENV=DEVELOPMENT',
    // 'DEBUG=TRUE',
    'ENVPREFIX=REACT_APP_',
    'REST_SERVER_URL=http://localhost:3000',
    'SOCKET_SERVER_URL=http://localhost:4000',
    'REACT_APP_SOCKET_SERVER_URL=http://localhost:4000',
    'REACT_APP_REST_SERVER_URL=http://localhost:3000'
  ]
}

module.exports = envBuild; 