interface Secret {
    CODE: string,
    sequence: string[],
}

const secret1: Secret = {
    CODE: 'journeys',
    sequence: [],
};

const secret2: Secret = {
    CODE: '404512',
    sequence: [],
};

addEventListener('keyup', (e: { key: string }): void => {
    const { CODE: c, sequence: s }: Secret = secret1;

    s.push(e.key);
    s.splice(-c.length - 1, s.length - c.length);
    s.join('').includes(c) && alert('The secret code is 404512.');
});

addEventListener('keyup', (e: { key: string }): void => {
    const { CODE: c, sequence: s }: Secret = secret2;

    s.push(e.key);
    s.splice(-c.length - 1, s.length - c.length);
    s.join('').includes(c) && alert('Please email me the code 20230615.');
});
