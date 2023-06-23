INSERT INTO
    users (
        email,
        username,
        first_name,
        last_name,
        country,
        photo,
        page,
        bio
    )
VALUES
    (
        ?,
        ?,
        '',
        '',
        '',
        '',
        '',
        ''
    );

INSERT INTO
    settings (theme, units, map)
VALUES
    (1, 1, 1);

INSERT INTO
    records (experience, notifications)
VALUES
    (0, ?);