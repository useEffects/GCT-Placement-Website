select students.name , d.name department from students
inner join students_rounds sr on sr.student_id = students.id
inner join rounds r on r.id = sr.round_id
inner join openings o on o.id = r.opening_id
inner join departments d on students.department_id = d.id where o.company_id = $1 and r.round = $2;
