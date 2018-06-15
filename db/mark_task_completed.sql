UPDATE taskList
SET completed=TRUE, datecompleted=CURRENT_DATE
WHERE taskid=$1;
SELECT * FROM taskList WHERE userId=$2 ORDER BY taskId ASC;
