SELECT
    u.id,
    u.username,
    u.first_name,
    u.last_name,
    u.country,
    u.registered,
    r.experience
FROM
    users AS u
    JOIN records AS r ON u.id = r.id
ORDER BY
    r.experience DESC
LIMIT
    1000;