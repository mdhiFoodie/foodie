import client from '../../../redis/index.js'

import {
  success,
  error
} from '../../../../lib/log';


export const poolController = {
  addPool: async (req, res) => {
    try {
      
      const poolId = 'poolId' + req.body.poolId;
      const bizId = req.body.bizId;
      const address = req.body.address;
      const timer = req.body.timer;
      const eta = req.body.eta;
      const count = req.body.count;
      const userId =  req.body.userId;

      await client.hmset( poolId,
        'bizId', bizId, 'address', address, 'timer', timer,
        'eta', eta, 'count', count, ('userId' + userId), userId );

      success('poolController - successfully added pool to redis pool');
      return res.status(200).send('pool created');

    } catch (err) {
      error('poolController - error= ', err);
      throw new Error(err);
    }
  },
  addUserToPool: async (req, res) => {
    try {

      const poolId = 'poolId' + req.body.poolId;
      const userId =  req.body.userId;

      await client.hset(poolId, ('userId' + userId), userId );
      await client.hincrby(poolId, 'count', 1);

      success('poolController - successfully added user to pool');
      return res.status(200).send('user addded to pool ');
    } catch (err) {
      error('add user poolController - error= ', err);
      throw new Error(err);      
    }
  }
}