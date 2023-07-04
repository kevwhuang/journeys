UPDATE
    users
SET
    first_name = ?,
    last_name = ?,
    country = UPPER(?),
    photo = ?,
    page = ?,
    bio = ?
WHERE
    username = ?;

UPDATE
    settings
SET
    theme = ?,
    units = ?,
    map = ?,
    sync = CURRENT_TIMESTAMP()
WHERE
    id = (
        SELECT
            id
        FROM
            users
        WHERE
            username = ?
    );