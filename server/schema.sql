DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  message VARCHAR(150),
  user_id INTEGER,
  room_id INTEGER,
  createdAt TIMESTAMP,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE messages ADD CONSTRAINT FOREIGN KEY (room_id) REFERENCES rooms (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

