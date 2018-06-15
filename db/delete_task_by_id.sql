DELETE FROM taskList WHERE taskId=$1;
SELECT * FROM taskList ORDER BY taskId ASC;