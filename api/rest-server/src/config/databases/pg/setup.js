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
} from '../../../lib/PG';

const setup = async () => {
  await dropDatabase();
  await dropFriendsTable();
  await dropMenusTable();
  await dropMessagesTable();
  await dropOrdersTable();
  await dropReviews_UsersTable();
  await dropReviewsTable();
  await dropUsersTable();
  await dropUsers_OrdersTable();
  await dropDelivery_UsersTable();
  await dropBusinessesTable();
  await createDatabase();
  await createBusinessesTable();
  await createDelivery_UsersTable();
  await createFriendsTable();
  await createMenusTable();
  await createMessagesTable();
  await createOrdersTable();
  await createReviewsTable();
  await createReviews_UsersTable();
  await createUsersTable();
  await createUsers_OrdersTable();
  process.exit();
};

setup();
