DROP DATABASE IF EXISTS SceneIT2_db;
CREATE DATABASE SceneIT2_db;

USE SceneIT2_db;

CREATE TABLE movies
(
    id INTEGER NOT NULL AUTO_INCREMENT,
	movie_name varchar(255) NOT NULL,
    genre varchar(255) NOT NULL,
    year INTEGER NOT NULL,
	seen BOOLEAN DEFAULT false,
    user_ranking float,
    userID varchar(255),
	PRIMARY KEY (id)
);


