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
        'kevin@journeys-app.com',
        'kevin',
        'Kevin',
        'Huang',
        'US',
        '',
        '',
        ''
    ),
    (
        'jane@journeys-app.com',
        'janedoe',
        'Jane',
        'Doe',
        'CA',
        '',
        'https://www.journeys-app.com',
        'I''m an avid animal adventurer.'
    ),
    (
        'alex@journeys-app.com',
        'alexlee',
        'Alex',
        'Lee',
        'SE',
        '',
        'https://www.journeys-app.com',
        'I love exploration.'
    );

INSERT INTO
    settings (id, theme, units, map)
VALUES
    (1, 1, 1, 2),
    (2, 1, 1, 2),
    (3, 0, 0, 0);

INSERT INTO
    records (id, experience)
VALUES
    (1, 999999999),
    (2, 8000000),
    (3, 0);