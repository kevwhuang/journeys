SELECT
    id,
    username,
    first_name,
    last_name,
    country,
    photo,
    registered,
    experience
FROM
    master
ORDER BY
    experience DESC
LIMIT
    1000;