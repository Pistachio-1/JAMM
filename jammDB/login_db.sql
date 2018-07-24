DROP DATABASE IF EXISTS login_db;

CREATE DATABASE login_db;

USE login_db;

CREATE TABLE learner (
    first_Name VARCHAR(50) NOT NULL,
    last_Name VARCHAR (50) NOT NULL,
    Age int DEFAULT 0,
    favorite_pet VARCHAR(50) NOT NULL,
);

INSERT INTO learner (first_Name,last_Name,age,favorite_pet)
VALUES ("tets","test",20,"cat")


