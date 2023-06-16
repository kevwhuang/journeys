SELECT
    u.id,
    u.username,
    u.first_name,
    u.last_name,
    u.country,
    u.photo,
    u.page,
    u.bio,
    u.registered,
    r.experience
FROM
    users AS u
    JOIN records AS r ON u.id = r.id
WHERE
    u.username = ?;