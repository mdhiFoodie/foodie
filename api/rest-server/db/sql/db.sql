CREATE DATABASE foodie;

USE foodie;

CREATE TABLE users (
  id int NOT NULL auto_increment,
  username varchar(50),
  password varchar(255),
  picture varchar(255),
  PRIMARY KEY(id)
);