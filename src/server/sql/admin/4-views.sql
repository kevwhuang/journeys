DROP VIEW IF EXISTS master;

CREATE VIEW master AS
SELECT
    u.*,
    s.theme,
    s.units,
    s.map,
    r.experience,
FROM
    users AS u
    JOIN settings AS s ON u.id = s.id
    JOIN records AS r ON u.id = r.id;