import client from '../../../redis/index.js'
import bluebird from 'bluebird';
bluebird.promisifyAll(client);

import {
  success,
  error
} from '../../../../lib/log';


export const poolController = {
  addPool: async (req, res) => {
    try {
      console.log('this is req.body', req.body);
      const poolId = 'poolId' + req.body.poolId;
      const bizId = req.body.bizId;
      const bizName = req.body.bizName;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const userId =  req.body.userId;
      let delivery = new Date();
      let closesAt = new Date();
      if (delivery.getHours() > 10) {
        delivery.setDate(delivery.getDate() + 1);
        closesAt.setDate(closesAt.getDate() + 1);
      }
      closesAt.setHours(10,0,0)
      const eta = closesAt;
      delivery.setHours(12,0,0);
      const timer = delivery;
      console.log('this is closes at and delivery', closesAt, delivery);
      const count = 1;

      await client.hmset( poolId,
        'bizId', bizId, 'bizName', bizName, 'longitude', longitude,'latitude', latitude, 'timer', timer,
        'eta', eta, 'count', count, ('userId' + userId), userId );

      await client.geoadd('bizId' + bizId, longitude, latitude, poolId);

      await client.sadd('allPools', poolId);
      
      await client.set(userId, poolId);
      delivery.setHours(13,0,0);
      const ttl = Math.round(delivery.getTime() / 1000);
      await client.expireat(userId, ttl)

      success('poolController - successfully added pool to redis pool');
      return res.status(200).send(false);

    } catch (err) {
      error('poolController - error= ', err);
      throw new Error(err);
    }
  },
  // addUserToPool: async (req, res) => {
  //   try {

  //     const poolId = 'poolId' + req.body.poolId;
  //     const userId =  req.body.userId;

  //     await client.hset(poolId, ('userId' + userId), userId );
  //     await client.hincrby(poolId, 'count', 1);

  //     success('poolController - successfully added user to pool');
  //     return res.status(200).send('user addded to pool ');
  //   } catch (err) {
  //     error('add user poolController - error= ', err);
  //     throw new Error(err);      
  //   }
  // },
  checkForExistingPoolThenAddUser: async (req, res) => {
    try {

      const bizId = req.body.bizId;
      const longitude = req.body.longitude;
      const latitude = req.body.latitude;
      const userId =  req.body.userId;
      const acceptableDistance = 500; //in meters
      const distanceUnits = 'm';

      await client.georadius('bizId' + bizId, longitude, latitude, acceptableDistance, distanceUnits, async (err, pools) => {
        if(err) {
          error('error checking georadius', err);
        }
        if (pools.length > 0 ) {
          console.log(pools);
          await client.hset(pools[0], ('userId' + userId), userId );
          await client.hincrby(pools[0], 'count', 1);    
          await client.set(userId, pools[0]);
          let rightNow = new Date();
          if (rightNow.getHours() > 10) {
            rightNow.setDate(rightNow.getDate() + 1);
          }
            rightNow.setHours(13,0,0);
          const ttl = Math.round(rightNow.getTime() / 1000);
          await client.expireat(userId, ttl);
          // const poolData = await client.hgetall(joinablePools);
          success('poolController - successfully found pool and added user');
          return res.status(200).send(true);        
        } else {
          success('poolController - no local pool creating new pool ');
          //if no pool exists then send a flag that will prompt user to add new pool
          poolController.addPool(req, res); //no idea if this will work...
        }
      });
      //should look into this data sturcture and if it needs to be mutated, what about if theres multiples??

    } catch (err) {
      error('add user poolController - error= ', err);
      throw new Error(err);      
    }
  },
  grabAllPools: (req, res) => {
    client.smembers('allPools', async (err, poolIds) => {
      if (err) {
        error('error grabbing poolIds')
      }
      const pools = [];

      for (let i = 0; i < poolIds.length; i++) {
        const poolData = await client.hgetallAsync(poolIds[i]);
        pools.push(poolData);
      }

        return res.status(200).send(pools);
    });
  }, 
  grabUsersPool: async (req, res) => {
    try {
      const userId = req.params.userId;
      success('poolController - successfully found users pool');
      await client.get(userId, (err, poolId) => {
        if (err) {
          error('error grabbing users poolId')
        }
        return res.status(200).send(poolId);
      });
    } catch (err) {
      error('add user poolController - error= ', err);
      throw new Error(err);  
    }
  }

}