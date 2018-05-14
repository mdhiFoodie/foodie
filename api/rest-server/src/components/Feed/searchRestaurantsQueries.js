import { globalQueryHelper } from '../../lib/components';

import { searchRestaurantsSQLHelper } from './searchRestaurantsSQLHelpers';

export const searchRestaurantsQueries = async (payload, url) => {
  if (url === `/feed/searchRestaurants/${payload.foodcategory}`) {
    console.log('PASS THE IF STATEMENT')
    const data = await globalQueryHelper(payload, searchRestaurantsSQLHelper, 'searchRestaurantsController', ['foodcategory']);
    console.log('inside queries, data ', data)
    return data;
  }
};
