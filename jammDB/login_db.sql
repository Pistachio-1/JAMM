DROP DATABASE IF EXISTS login_db;

CREATE DATABASE login_db;

USE login_db;

CREATE TABLE learner (
    firstName       VARCHAR(50) NOT NULL,
    lastName        VARCHAR (50) NOT NULL,
    age             INTEGER DEFAULT 0,
    favoritePet     VARCHAR(50) NOT NULL,
    createdAt       TIMESTAMP DEFAULT NOW(),
    updatedAt       TIMESTAMP DEFAULT NOW(),
);

INSERT INTO learner (firstName,lastName,age,favoritePet)
VALUES ("tets","test",20,"cat")


