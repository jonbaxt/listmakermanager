INSERT INTO taskList
(task, description, completed, dateassigned, datecompleted, userid)
VALUES
($1, null, false, CURRENT_DATE, null, $2);

SELECT * FROM taskList WHERE userId=$2 ORDER BY taskId ASC;;