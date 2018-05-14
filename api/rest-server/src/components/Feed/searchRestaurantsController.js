import db from '../../config/databases/pg';

import { searchRestaurantsQueries } from './searchRestaurantsQueries.js';
import { globalController } from '../../lib/components';

export const searchRestaurantsController = globalController(searchRestaurantsQueries, 'searchRestaurantsController');
