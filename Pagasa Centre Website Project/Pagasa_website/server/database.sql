CREATE DATABASE pagasawebsite;

CREATE TABLE church_members(
    member_id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    surname VARCHAR(255)
);