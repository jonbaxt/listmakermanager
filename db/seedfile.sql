DROP TABLE IF EXISTS taskList;
DROP TABLE IF EXISTS taskListUsers;

CREATE TABLE taskListUsers(
Id SERIAL PRIMARY KEY,
name VARCHAR(40),
img VARCHAR(200)
);

CREATE TABLE taskList(
taskId SERIAL PRIMARY KEY,
task VARCHAR(100),
description VARCHAR(500),
completed BOOLEAN,
dateAssigned DATE,
dateCompleted DATE,
userId INTEGER REFERENCES taskListUsers(Id) ON DELETE CASCADE
);

INSERT INTO taskListUsers 
(name, img)
VALUES
('Jonathan Baxter', 'https://lh5.googleusercontent.com/-JLfHGi69FlQ/AAAAAAAAAAI/AAAAAAAAAT8/MvFrMrA3hi8/photo.jpg'),
('Larry Fine', NULL),
('Curly Howard', NULL),
('Moe Howard', NULL),
('Samuel L. Jackson', NULL);


INSERT INTO taskList
(task, description, completed, dateAssigned, dateCompleted, userId)
VALUES
('Take out the trash', NULL, TRUE, CURRENT_DATE, CURRENT_DATE, 1),
('Go for a walk', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Code in Vue', NULL, TRUE, CURRENT_DATE, CURRENT_DATE, 1),
('Code in React', NULL, TRUE, CURRENT_DATE, CURRENT_DATE, 1),
('Code in Javascript', NULL, FALSE, CURRENT_DATE, nuLL, 1),
('Code on the 4th of the July', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Code on Christmas', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Create snowangles', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Go to the park', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Walk the dog', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Eat Cake', NULL, TRUE, CURRENT_DATE, CURRENT_DATE, 1),
('Go on vacation to Great Britain', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Take a vaction from my problems', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Make egg foo yong', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Make fried rice', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Eat at Big Judds Burgers', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Eat at Porters Place', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Go to the mall', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Go to the moon', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Go see the Avengers', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Buy a Batmobile', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Buy a Cruiser', NULL, FALSE, CURRENT_DATE, NULL, 1),
('Code in Timbuktu', 'Someday, you will need to code there. This is the goal.', FALSE, CURRENT_DATE, NULL, 1),
('Buy a Cruiser', NULL, FALSE, CURRENT_DATE, NULL, 2),
('Go get your violin', NULL, FALSE, CURRENT_DATE, NULL, 2),
('Get a plumbing job', NULL, FALSE, CURRENT_DATE, NULL, 2),
('Get some overalls', NULL, FALSE, CURRENT_DATE, NULL, 2);

SELECT * FROM taskListUsers;

SELECT * FROM taskList;