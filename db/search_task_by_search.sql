-- SELECT * FROM tasklist
-- WHERE userid=$2 
-- AND task ILIKE 
-- '%' || $1 || '%';

SELECT * FROM tasklist
WHERE task ILIKE '%' || $1 || '%'
AND userid=$2;

-- SELECT * FROM tasklist
-- WHERE task ILIKE '%cOde%' 
-- ;
-- WHERE LOWER(task) ILIKE LOWER($1);


-- SELECT * FROM tasklist
-- WHERE LOWER(task) ILIKE LOWER('%code%');