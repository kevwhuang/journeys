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
        'https://source.unsplash.com/random/200x200/?face&v=1',
        'https://journeys-app.com',
        'I love exploration.'
    ),
    (
        'janedoe@journeys-app.com',
        'janedoe',
        'Jane',
        'Doe',
        'CA',
        'https://source.unsplash.com/random/200x200/?face&v=2',
        'https://journeys-app.com',
        'I''m an avid animal adventurer.'
    ),
    (
        'alex@journeys-app.com',
        'alexlee',
        'Alex',
        'Lee',
        '',
        '',
        '',
        ''
    );

INSERT INTO
    settings (theme, units, map)
VALUES
    (1, 1, 2),
    (1, 1, 2),
    (0, 0, 0);

INSERT INTO
    records (experience, notifications)
VALUES
    (999999999, null),
    (8000000, null),
    (0, null);