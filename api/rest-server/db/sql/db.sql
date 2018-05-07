CREATE DATABASE foodie;

USE foodie;

CREATE TABLE Users (
  id SERIAL,
  name varchar (50),
  profilePicture varchar (255),
  email varchar (50),
  password varchar (255),
  type int NOT NULL,
  phone int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Businesses (
  id SERIAL,
  businessPicture varchar(255),
  businessAddress varchar (255),
  rating int,
  foodCategory varchar (50),
  totalOrder int,
  dailyOrders int,
  gross int,
  email varchar (50),
  phone int NOT NULL,
  businessName varchar (100),
  contactName varchar (50),
  businessPassword varchar (50),
  PRIMARY KEY (id)
);

CREATE TABLE Delivery_Users (
  id SERIAL,
  id_Users int NOT NULL,
  id_Businesses int NOT NULL,
  FOREIGN KEY(id_Users) REFERENCES Users(id),
  FOREIGN KEY(id_Businesses) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Reviews (
  id SERIAL,
  rating int NOT NULL,
  comment varchar (255),
  id_Businesses int NOT NULL,
  FOREIGN KEY(id_Businesses) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Reviews_Users (
  id SERIAL,
  id_Users int NOT NULL,
  id_Reviews int NOT NULL,
  FOREIGN KEY(id_Users) REFERENCES Users(id),
  FOREIGN KEY(id_Reviews) REFERENCES Reviews(id),
  PRIMARY KEY (id)
);

CREATE TABLE Menus (
  id SERIAL,
  foodItem varchar (255),
  price int NOT NULL,
  foodType int NOT NULL,
  id_Businesses int NOT NULL,
  FOREIGN KEY(id_Businesses) REFERENCES Businesses(id),
  PRIMARY KEY (id)
);

CREATE TABLE Friends (
  id SERIAL,
  id_friendSent int NOT NULL,
  id_friendReceived int NOT NULL,
  FOREIGN KEY (id_friendSent) REFERENCES Users(id),
  FOREIGN KEY (id_friendReceived) REFERENCES Users(id),
  accepted boolean NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Orders (
  id SERIAL,
  id_Users int NOT NULL,
  id_Businesses int NOT NULL,
  FOREIGN KEY (id_Users) REFERENCES Users(id),
  FOREIGN KEY (id_Businesses) REFERENCES Businesses (id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  cart varchar (255),
  total int NOT NULL,
  location int NOT NULL,
  totalUsersInEachOrder int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Users_Orders (
  id SERIAL,
  id_Users int NOT NULL,
  id_Orders int NOT NULL,
  FOREIGN KEY (id_Users) REFERENCES Users(id),
  FOREIGN KEY (id_Orders) REFERENCES Orders (id),
  PRIMARY KEY (id)
);

CREATE TABLE Messages (
  id SERIAL,
  id_userSending int NOT NULL,
  id_userReceiving int NOT NULL,
  id_Orders int NOT NULL,
  FOREIGN KEY (id_userSending) REFERENCES Users(id),
  FOREIGN KEY (id_userReceiving) REFERENCES Users(id),
  messageBody varchar (255),
  FOREIGN KEY (id_Orders) REFERENCES Orders(id),
  PRIMARY KEY (id)
);
