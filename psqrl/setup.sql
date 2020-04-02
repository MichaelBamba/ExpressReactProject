create database pandemicBlog

create table users ( user_id serial primary key, 
username varchar,
email varchar,
password varchar);

create table blogPosts(post_id serial primary key,
 user_id integer References users(user_id),
 post varchar);


create table Comments (
    comment_id serial primary key,
    user_id integer References users(user_id),
    comment varchar(250)
);

INSERT INTO users (username, email, password)
VALUES
('Loki', 'Lokie@email.com', 'Loki1' );

INSERT INTO blogPosts 