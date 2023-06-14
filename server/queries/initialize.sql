DROP DATABASE IF EXISTS journeys;

CREATE DATABASE journeys;

USE journeys;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    email VARCHAR(50) UNIQUE,
    username VARCHAR(25) UNIQUE,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    country CHAR(2),
    photo VARCHAR(100),
    page VARCHAR(100),
    bio MEDIUMTEXT,
    registered DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
);

CREATE TABLE system (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    theme TINYINT(1),
    units TINYINT(1),
    map TINYINT(1),
    sync DATETIME DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE,
);

CREATE TABLE records (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    experience INT(15),
    notifications JSON,
    FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE,
);