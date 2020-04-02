create database pandemicBlog

create table users ( user_id serial primary key, 
username varchar,
email varchar);

create table blogPosts(blod_id serial primary key,
 user_id integer References users(user_id),
 post varchar,


create table Comments (
    comment_id serial primary key,
    user_id integer References user(user_id)
    comment varchar(250)
)