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
        'kevin@aephonics.com',
        'kevin',
        'Kevin',
        'Huang',
        'US',
        'https://images.unsplash.com/photo-1640879776845-3956cc8cf2f1?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/kevin',
        'Creator of Journeys.'
    ),
    (
        'alexandra.lee@journeys-app.com',
        'alexandra',
        'Alexandra',
        'Lee',
        'CA',
        'https://images.unsplash.com/photo-1464863979621-258859e62245?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/alexandra',
        'Live your life by a compass.'
    ),
    (
        'sam.martinez@journeys-app.com',
        'thewanderer',
        'Sam',
        'Martinez',
        'MX',
        'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/thewanderer',
        'Take only memories; leave only footprints.'
    ),
    (
        'charlotte.webb@journeys-app.com',
        'spiderwoman',
        'Charlotte',
        'Webb',
        'GB',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/spiderwoman',
        'Adventure awaits out there.'
    ),
    (
        'caleb.rodriguez@journeys-app.com',
        'barcelonafan',
        'Caleb',
        'Rodriguez',
        'CO',
        'https://images.unsplash.com/photo-1545996124-0501ebae84d0?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/barcelonafan',
        'The path matters more than the destination.'
    ),
    (
        'sophia.moore@journeys-app.com',
        'pineapplepizza',
        'Sophia',
        'Moore',
        'NZ',
        'https://images.unsplash.com/photo-1524290266577-e90173d9072a?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/pineapplepizza',
        'A journey of a thousand miles begins with a single step.'
    ),
    (
        'tyler.meyers@journeys-app.com',
        'relyt',
        'Tyler',
        'Meyers',
        'DE',
        'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/relyt',
        'The world is a book meant to be read.'
    ),
    (
        'jessica.wilson@journeys-app.com',
        'jessicawilson',
        'Jessica',
        'Wilson',
        'SE',
        'https://images.unsplash.com/photo-1521146764736-56c929d59c83?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/jessicawilson',
        'Traveling turns you into a storyteller.'
    ),
    (
        'noah.evans@journeys-app.com',
        'noahgettheboat',
        'Noah',
        'Evans',
        'BR',
        'https://images.unsplash.com/photo-1622559924472-2c2f69abb854?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/noahgettheboat',
        'Experience the world like none other.'
    ),
    (
        'madison.clark@journeys-app.com',
        'ultimatechoice',
        'Madison',
        'Clark',
        'NO',
        'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?fit=crop&w=500&h=500',
        'https://journeys-app.com/account/ultimatechoice',
        'Life is either an adventure or nothing at all.'
    );

INSERT INTO
    settings (theme, units, map)
VALUES
    (1, 1, 2),
    (1, 0, 1),
    (1, 1, 0),
    (1, 0, 2),
    (1, 1, 1),
    (0, 0, 0),
    (0, 1, 2),
    (0, 0, 1),
    (0, 1, 0),
    (0, 0, 2);

INSERT INTO
    records (experience, notifications)
VALUES
    (
        12524929,
        '[{"subject":"New Theme","message":"Dark mode is now supported.","priority":1},{"subject":"Setup Your Profile","message":"Add your first and last name.","priority":1},{"subject":"Welcome","message":"Embark on your first Journey.","priority":2}]'
    ),
    (10147438, null),
    (8019941, null),
    (6142456, null),
    (4514960, null),
    (3137471, null),
    (2009976, null),
    (1132484, null),
    (504990, null),
    (127495, null);