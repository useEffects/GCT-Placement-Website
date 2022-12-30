with inserted_row as (
    insert into openings( company_id, description) values ($1, $2)
    returning id
) insert into rounds (opening_id, round, description) select id, 1, $3 from inserted_row returning id;
