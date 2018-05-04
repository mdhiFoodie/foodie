const fs = require('fs');
const _ = require('lodash'); 

const envVariables = require('../config/env.data');

const createEnvFile = (directory, variables) => {
  _.each(variables, (variable) => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  })
}

const buildEnv = () => {
  _.each(envVariables, (value, key) => {
    fs.writeFileSync(`./${key}/.env`, '')
    createEnvFile(key, value); 
  });
}

buildEnv(); 