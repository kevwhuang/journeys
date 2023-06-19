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
        'https://source.unsplash.com/random/500x500/?face&v=1',
        'https://journeys-app.com',
        'I like to travel and explore.'
    ),
    (
        'janedoe@journeys-app.com',
        'janedoe',
        'Jane',
        'Doe',
        'CA',
        'https://source.unsplash.com/random/500x500/?face&v=2',
        'https://journeys-app.com',
        'I''m an avid animal adventurer.'
    ),
    (
        'alex@journeys-app.com',
        'alexlee',
        null,
        null,
        null,
        null,
        null,
        null
    );

INSERT INTO
    settings (theme, units, map)
VALUES
    (1, 1, 2),
    (1, 1, 1),
    (0, 0, 0);

INSERT INTO
    records (experience, notifications)
VALUES
    (
        0,
        '[{"subject":"New Theme","message":"Dark mode is now supported.","priority":1},{"subject":"Setup Your Profile","message":"Add your first and last name.","priority":1},{"subject":"Welcome","message":"Embark on your first Journey.","priority":2}]'
    ),
    (999999999, null),
    (1000000, null);