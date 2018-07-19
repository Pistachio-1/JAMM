DROP DATABASE IF EXISTS login_db;

CREATE DATABASE login_db;

USE login_db;

CREATE TABLE learner (
    firstName       VARCHAR(50) NOT NULL,
    lastName        VARCHAR (50) NOT NULL,
    email           VARCHAR(100) NOT NULL,
    coins           INTEGER DEFAULT 0,
    favoritePet     VARCHAR(50) NOT NULL,
    createdAt       TIMESTAMP DEFAULT NOW(),
    updatedAt       TIMESTAMP DEFAULT NOW(),
);

INSERT INTO learner (firstName,lastName,email,coins,favoritePet)
VALUES ("tests","test","me@pets.com",20,"cat")


