require('dotenv').config();

import db from '../../config/databases/pg';
import {
  success,
  error
} from '../../../../lib/log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

/**
 * SQL statements for syncing and dropping tables
 * 
 * Used in npm script `db:setup:rest-server`
 * 
 * Database
 * Users
 * Challenges
 * Friends
 * Histories
 * TestCases
 * UsersChallenges
 * Sabotages
 */

// database SQL statements to create, drop, and use a database
export const createDatabase = async () => {
  try {
    await db.query(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database ', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.query(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.query(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

// user table - creation and deletion

export const createUsersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS users
      (
        id SERIAL,
        name varchar (50),
        profilepicture varchar (255),
        email varchar (50),
        password varchar (255),
        type int NOT NULL,
        phone int NOT NULL,
        CONSTRAINT users_pk
          PRIMARY KEY (id)
      )
      `
    );
    success('successfully created Users table');
  } catch (err) {
    error('error creating Users table ', err)
  }
};

export const dropUsersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped Users table');
  } catch (err) {
    error('error dropping Users table ', err);
  }
};

// create Businesses table - creation and deletion

export const createBusinessesTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS businesses
      (
        id SERIAL,
        businesspicture varchar(255),
        businessaddress varchar (255),
        rating int,
        foodcategory varchar (50),
        totalorder int,
        dailyorders int,
        gross int,
        email varchar (50),
        phone int NOT NULL,
        businessname varchar (100),
        contactname varchar (50),
        businesspassword varchar (50),
        CONSTRAINT businesses_pk
          PRIMARY KEY (id)
      )
      `
    );
    success('successfully created Businesses table');
  } catch (err) {
    error('error creating Businesses table ', err);
  }
};

export const dropBusinessesTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS businesses`
    );
    success('successfully dropped Businesses table');
  } catch (err) {
    error('error dropping Businessess table ', err);
  }
};

// Delivery_Users table - creation and deletion

export const createDelivery_UsersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS delivery_users
      (
        id SERIAL,
        id_users int NOT NULL,
        id_businesses int NOT NULL,
        CONSTRAINT fk_delivery_users_id_users
          FOREIGN KEY(id_users) REFERENCES users(id),
        CONSTRAINT fk_delivery_users_id_businesses  
          FOREIGN KEY(id_businesses) REFERENCES businesses(id),
        CONSTRAINT delivery_users_pk  
          PRIMARY KEY (id)
      )
      `
    );
    success('succesfully created Delivery_Users table')
  } catch (err) {
    error('error creating Delivery_Users table ', err);
  }
};

export const dropDelivery_UsersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS delivery_users`
    );
  } catch (err) {
    error('error dropping Delivery_Users table ', err);
  }
};

// Reviews table - creation and deletion

export const createReviewsTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS reviews
      (
        id SERIAL,
        rating int NOT NULL,
        comment varchar (255),
        id_businesses int NOT NULL,
        CONSTRAINT fk_reviews_id_businesses
          FOREIGN KEY(id_businesses) REFERENCES businesses(id),
        CONSTRAINT reviews_pk  
          PRIMARY KEY (id)
      )
      `
    );
    success('successfully created Reviews table');
  } catch (err) {
    error('error creating Reviews table ', err);
  }
};

export const dropReviewsTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS reviews`
    );
    success('successfully dropped Reviews table');
  } catch (err) {
    error('error dropping Reviews table ', err);
  }
};

// Reviews_Users table - creation and deletion

export const createReviews_UsersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS reviews_users
      (
        id SERIAL,
        id_users int NOT NULL,
        id_reviews int NOT NULL,
        CONSTRAINT fk_reviews_users_id_users
          FOREIGN KEY(id_users) REFERENCES users(id),
        CONSTRAINT fk_reviews_users_id_reviews  
          FOREIGN KEY(id_reviews) REFERENCES reviews(id),
        CONSTRAINT reviews_users_pk  
          PRIMARY KEY (id)
      )
      `
    );
    success('successfully created Reviews_Users table');
  } catch (err) {
    error('error creating Reviews_Users table ', err);
  }
};

export const dropReviews_UsersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS reviews_users`
    );
    success('successfully dropped Reviews_Users table');
  } catch (err) {
    error('error dropping Reviews_Users table ', err);
  }
};

// Menus table - creation and deletion

export const createMenusTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS menus
      (
        id SERIAL,
        fooditem varchar (255),
        price int NOT NULL,
        foodtype int NOT NULL,
        id_businesses int NOT NULL,
        CONSTRAINT fk_menus_id_businesses
          FOREIGN KEY(id_businesses) REFERENCES businesses(id),
        CONSTRAINT menus_pk  
          PRIMARY KEY (id)
      )
      `
    );
    success('successfully created Menus table');
  } catch (err) {
    error('error creating Menus table ', err);
  }
};

export const dropMenusTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS menus`
    );
    success('successfully dropped Menus table');
  } catch (err) {
    error('error dropping Menus table ', err);
  }
};

// Friends table - creation and deletion

export const createFriendsTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS friends
      (
        id SERIAL,
        id_friendsent int NOT NULL,
        id_friendreceived int NOT NULL,
        CONSTRAINT fk_friends_id_friendsent
          FOREIGN KEY (id_friendsent) REFERENCES users(id),
        CONSTRAINT fk_friends_id_friendreceived
          FOREIGN KEY (id_friendreceived) REFERENCES users(id),
        accepted boolean NOT NULL,
        CONSTRAINT friends_pk
          PRIMARY KEY (id)
      )
      `
    )
    success('successfully created friends table');
  } catch (err) {
    error('error creating friends table ', err);
  }
};

export const dropFriendsTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS friends`
    )
    success('successfully dropped Friends table');
  } catch (err) {
    error('error dropping Friends table');
  }
};

// Orders table - creation and deletion

export const createOrdersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS orders
      (
        id SERIAL,
        id_users int NOT NULL,
        id_businesses int NOT NULL,
        createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        cart varchar (255),
        total int NOT NULL,
        location int NOT NULL,
        totalusersineachorder int NOT NULL,
        CONSTRAINT fk_orders_id_users
          FOREIGN KEY (id_users) REFERENCES users(id),
        CONSTRAINT fk_orders_id_businesses
          FOREIGN KEY (id_businesses) REFERENCES businesses (id),
        CONSTRAINT orders_pk
          PRIMARY KEY (id)
      )
      `
    )
    success('successfully created Orders table');
  } catch (err) {
    error('error creating Orders table ', err);
  }
};

export const dropOrdersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS orders`
    )
    success('successfully dropped Orders table');
  } catch (err) {
    error('error dropping Orders table ', err);
  }
};

export const createUsers_OrdersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS users_orders
      (
        id SERIAL,
        id_users int NOT NULL,
        id_orders int NOT NULL,
        CONSTRAINT fk_users_orders_id_users
          FOREIGN KEY (id_users) REFERENCES users(id),
        CONSTRAINT fk_users_orders_id_orders
          FOREIGN KEY (id_orders) REFERENCES orders (id),
        CONSTRAINT users_orders_pk
          PRIMARY KEY (id)
      )
      `
    )
    success('successfully created Users_Orders table');
  } catch (err) {
    error('error creating Users_Orders table ', err);
  }
};

export const dropUsers_OrdersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS users_orders`
    )
    success('successfully dropped Users_Orders table');
  } catch (err) {
    error('error dropping Users_Orders table ', err);
  }
};

export const createMessagesTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS messages
      (
        id SERIAL,
        id_usersending int NOT NULL,
        id_userreceiving int NOT NULL,
        id_orders int NOT NULL,
        CONSTRAINT fk_messages_id_usersending
          FOREIGN KEY (id_usersending) REFERENCES users(id),
        CONSTRAINT fk_messages_id_userreceiving
          FOREIGN KEY (id_userreceiving) REFERENCES users(id),
        messagebody varchar (255),
        CONSTRAINT fk_messages_id_orders
          FOREIGN KEY (id_orders) REFERENCES orders(id),
        CONSTRAINT messages_pk
          PRIMARY KEY (id)
      )
      `
    )
    success('successfully created Messages table');
  } catch (err) {
    error('error creating Messages table ', err);
  }
};

export const dropMessagesTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS messages`
    )
    success('successfully dropped Messages table');
  } catch (err) {
    error('error dropping Messages table ', err);
  }
};