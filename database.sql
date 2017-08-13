CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    completed varchar (10) not null,
    notes varchar (200));
    
 INSERT INTO table (task, completed, notes)
 VALUES ('Clean the bathroom','Y', 'floor is really dirty' ), 
('vacuum', 'Y', 'bag should be changed'), 
('complete weekend challenge 3', 'N', 'allow adquate time');

