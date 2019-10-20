CREATE DATABASE IF NOT EXISTS employees;
USE employees;
CREATE TABLE IF NOT EXISTS workers (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    salary INT UNSIGNED NOT NULL
);

INSERT INTO workers (id, first_name, last_name, salary) VALUES (null, 'Valery', 'Zhmyshenko', 300000);
INSERT INTO workers (id, first_name, last_name, salary) VALUES (null, 'James', 'Bond', 90000);
INSERT INTO workers (id, first_name, last_name, salary) VALUES (null, 'Brain', 'Molko', 25000);
INSERT INTO workers (id, first_name, last_name, salary) VALUES (null, 'Vadim', 'Sachev', 20000); 

CREATE TABLE IF NOT EXISTS positions (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
	position_name VARCHAR(30) NOT NULL
);

INSERT INTO positions (id, position_name) VALUES (null, 'boss');
INSERT INTO positions (id, position_name) VALUES (null, 'manager');
INSERT INTO positions (id, position_name) VALUES (null, 'probationer');

ALTER TABLE workers ADD work_position VARCHAR(30) NOT NULL;

UPDATE workers SET work_position='boss' WHERE id=1;
UPDATE workers SET work_position='manager' WHERE id IN (2,3);
UPDATE workers SET work_position='probationer' WHERE id=4;

CREATE TABLE IF NOT EXISTS subordination (
	worker INT UNSIGNED,
    head_of INT UNSIGNED,
    FOREIGN KEY (worker) REFERENCES workers (id),
	FOREIGN KEY (head_of) REFERENCES workers (id)
);

INSERT INTO subordination (worker, head_of) VALUES (1, 2);
INSERT INTO subordination (worker, head_of) VALUES (1, 3);
INSERT INTO subordination (worker, head_of) VALUES (2, 4);
INSERT INTO subordination (worker, head_of) VALUES (3, 4);
INSERT INTO subordination (worker, head_of) VALUES (4, null);


-- запрос данных
SELECT sw.id, sw.first_name, sw.last_name, sw.salary, sw.work_position 
FROM workers w
INNER JOIN subordination s 
	ON w.id=s.worker
INNER JOIN workers sw 
	ON sw.id=s.head_of
-- id босса, на выходе получаем двух менеджеров в подчинении
WHERE w.id=1;

