DROP DATABASE IF EXISTS journeys;

CREATE DATABASE journeys;

USE journeys;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    username VARCHAR(25) UNIQUE NOT NULL,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    country CHAR(2),
    photo VARCHAR(100),
    page VARCHAR(100),
    bio VARCHAR(1000),
    registered DATETIME DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE settings (
    id INT AUTO_INCREMENT UNIQUE,
    theme TINYINT(1),
    units TINYINT(1),
    map TINYINT(1),
    sync DATETIME DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE records (
    id INT AUTO_INCREMENT UNIQUE,
    experience INT,
    notifications MEDIUMTEXT,
    FOREIGN KEY (id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE history AS
SELECT
    *
FROM
    users;

ALTER TABLE
    history DROP country,
    DROP photo,
    DROP page,
    DROP bio;