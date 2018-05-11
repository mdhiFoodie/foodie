import { globalQueryHelper } from '../../lib/components';

import { searchRestaurantsSQLHelper } from './searchRestaurantsSQLHelpers';

export const searchRestaurantsQueries = async (payload, url) => {
  console.log('this is my payload from search queries', payload, 'url', url)
  if (url === `/feed/searchRestaurants/${payload.foodcategory}`) {
    console.log('PASS THE IF STATEMENT')
    const data = await globalQueryHelper(payload, searchRestaurantsSQLHelper, 'searchRestaurantsController', ['foodcategory']);
    console.log('inside queries, data ', data)
    return data;
  }
  // else {
  //   return await globalQueryHelper(payload, searchRestaurantsSQLHelper,'searchRestaurantsController')
  // }
};
