import {
  createDatabase,
  createUsersTable,
  createBusinessesTable,
  createDelivery_UsersTable,
  createReviewsTable,
  createReviews_UsersTable,
  createMenusTable,
  createFriendsTable,
  createOrdersTable,
  createUsers_OrdersTable,
  createMessagesTable,
  dropDatabase,
  dropUsersTable,
  dropBusinessesTable,
  dropDelivery_UsersTable,
  dropReviewsTable,
  dropReviews_UsersTable,
  dropMenusTable,
  dropFriendsTable,
  dropOrdersTable,
  dropUsers_OrdersTable,
  dropMessagesTable,
  useDatabase,
  dummyData, 
} from '../../../lib/PG';

const setup = async () => {
  await dropDatabase();
  await dropFriendsTable();
  await dropMenusTable();
  await dropMessagesTable();
  await dropReviews_UsersTable();
  await dropReviewsTable();
  await dropUsers_OrdersTable();
  await dropOrdersTable();
  await dropDelivery_UsersTable();
  await dropBusinessesTable();
  await dropUsersTable();
  await createDatabase();
  await createUsersTable();
  await createBusinessesTable();
  await createDelivery_UsersTable();
  await createFriendsTable();
  await createMenusTable();
  await createOrdersTable();
  await createMessagesTable();
  await createReviewsTable();
  await createReviews_UsersTable();
  await createUsers_OrdersTable();
  await dummyData();
  process.exit();
};

setup();
