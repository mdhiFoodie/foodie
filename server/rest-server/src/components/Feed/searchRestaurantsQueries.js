import { globalQueryHelper } from '../../lib/components';

import { searchRestaurantsSQLHelper } from './searchRestaurantsSQLHelpers';

export const searchRestaurantsQueries = async (payload, url) => {
  if (url === `/feed/searchRestaurants/${payload.foodcategory}`) {
    const data = await globalQueryHelper(
      payload,
      searchRestaurantsSQLHelper,
      'searchRestaurantsController',
      ['foodcategory']
    );
    return data;
  }
};
