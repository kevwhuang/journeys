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
        'tester@journeys-app.com',
        'tester',
        'Jessica',
        'Roach',
        'US',
        'https://source.unsplash.com/random/200x200/?face',
        'https://journeys-app.com',
        'This is my bio.'
    );

INSERT INTO
    settings (theme, units, map)
VALUES
    (0, 0, 0);

INSERT INTO
    records (experience)
VALUES
    (2000000);