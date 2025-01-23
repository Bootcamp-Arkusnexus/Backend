CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(name, email) 
    VALUES ('Eduardo RS', 'erendon@arkusnexus.com'), 
    ('Gael Felix', 'gfelix@arkusnexus.com'), 
    ('Eduardo de Anda', 'edeanda@arkusnexus.com'), 
    ('Alvaro Munoz', 'amunoz@arkusnexus.com'), 
    ('Fernanda Gonzalez', 'mgonzalez@arkusnexus.com');