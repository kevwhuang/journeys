SELECT
    id,
    username,
    first_name,
    last_name,
    country,
    photo,
    page,
    bio,
    registered,
    experience
FROM
    master
WHERE
    id = ?;