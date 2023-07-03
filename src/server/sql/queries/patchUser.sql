UPDATE
    records
SET
    experience = ?,
    notifications = ?
WHERE
    id = (
        SELECT
            id
        FROM
            users
        WHERE
            username = ?
    );