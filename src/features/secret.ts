interface Secret {
    CODE: string,
    sequence: string[],
}

const secret: Secret = {
    CODE: 'journeys',
    sequence: [],
};

addEventListener('keyup', (e: { key: string }): void => {
    const { CODE: c, sequence: s }: Secret = secret;

    s.push(e.key);
    s.splice(-c.length - 1, s.length - c.length);
    s.join('').includes(c) && alert('The secret code is 404512.');
});
