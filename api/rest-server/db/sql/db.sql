CREATE DATABASE foodie;

USE foodie;

CREATE TABLE Users (
  id int NOT NULL auto_increment,
  name varchar (50),
  profilePicture varchar (255),
  email varchar (50),
  password varchar (255),
  type int NOT NULL,
  phone int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Businesses (
  id int NOT NULL auto_increment,
  businessPicture varchar(255),
  address varchar (255),
  rating int NOT NULL,
  foodCategory varchar (50),
  totalOrder int NOT NULL,
  dailyOrders int NOT NULL,
  gross int NOT NULL,
  cuisineType varchar (50),
  email varchar (50),
  phone int NOT NULL,
  businessName varchar (100),
  contactName varchar (50),
  PRIMARY KEY (id)
);

CREATE TABLE Delivery_Users (
  id int NOT NULL auto_increment,
  FOREIGN KEY(id_Users) REFERENCES Users(id),
  FOREIGN KEY(id_Business) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Reviews (
  id int NOT NULL auto_increment,
  rating int NOT NULL,
  comment varchar (255),
  FOREIGN KEY(id_Business) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Reviews_Users (
  id int NOT NULL auto_increment,
  FOREIGN KEY(id_Users) REFERENCES Users(id),
  FOREIGN KEY(id_Reviews) REFERENCES Reviews(id),
  PRIMARY KEY (id)
)

CREATE TABLE Menus (
  id int NOT NULL auto_increment,
  foodItem varchar (255),
  price int NOT NULL,
  foodType int NOT NULL,
  FOREIGN KEY(id_Business) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Friends (
  id int NOT NULL auto_increment,
  FOREIGN KEY (id_friendSent) REFERENCES Users(id),
  FOREIGN KEY (id_friendReceived) REFERENCES Users(id),
  accepted boolean NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Orders (
  id int NOT NULL auto_increment,
  FOREIGN KEY (id_Users) REFERENCES Users (id),
  FOREIGN KEY (id_Business) REFERENCES Businesses (id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  cart varchar (255),
  total int NOT NULL,
  location int NOT NULL,
  totalUsersInEachOrder int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Users_Orders (
  id int NOT NULL auto_increment,
  FOREIGN KEY (id_Users) REFERENCES Users(id),
  FOREIGN KEY (id_Orders) REFERENCES Orders (id),
  PRIMARY KEY (id)
);

CREATE TABLE Messages (
  id int NOT NULL auto_increment,
  FOREIGN KEY (id_userSending) REFERENCES Users(id),
  FOREIGN KEY (id_userReceiving) REFERENCES Users(id),
  messageBody varchar (255),
  FOREIGN KEY (id_Orders) REFERENCES Orders(id),
  PRIMARY KEY (id)
);

