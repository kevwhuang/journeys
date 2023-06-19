SELECT
    u.email,
    u.username,
    u.first_name,
    u.last_name,
    u.country,
    u.photo,
    u.page,
    u.bio,
    u.registered,
    s.theme,
    s.units,
    s.map
FROM
    users AS u
    JOIN settings AS s ON u.id = s.id
WHERE
    u.username = ?;