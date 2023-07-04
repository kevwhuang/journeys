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
    s.map,
    r.experience,
    r.notifications
FROM
    users AS u
    JOIN settings AS s ON u.id = s.id
    JOIN records AS r ON u.id = r.id
WHERE
    u.username = ?;