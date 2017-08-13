CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    completed varchar (1) not null,
    notes varchar (200));
    
 INSERT INTO table (task, completed, notes)
 VALUES ('Clean the bathroom', 'floor is really dirty', 'Y'), 
('vacuum', 'bag should be changed','Y'), 
('complete weekend challenge 3', 'allow adquate time', 'N');

