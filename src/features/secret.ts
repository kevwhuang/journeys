'use strict';

interface Secret {
    code: string,
    sequence: string[],
}

const secret1: Secret = {
    code: 'journeys',
    sequence: [],
};

const secret2: Secret = {
    code: '404512',
    sequence: [],
};

let initialized1: boolean = false;
let initialized2: boolean = false;

addEventListener('keyup', (e: KeyboardEvent): void => {
    const { code: c, sequence: s }: Secret = secret1;

    if (initialized1) return;
    s.push(e.key);
    s.splice(-c.length - 1, s.length - c.length);

    if (s.join('').includes(c)) {
        initialized1 = true;
        alert('The secret code is 404512.');
    }
});

addEventListener('keyup', (e: KeyboardEvent): void => {
    const { code: c, sequence: s }: Secret = secret2;

    if (initialized2) return;
    s.push(e.key);
    s.splice(-c.length - 1, s.length - c.length);

    if (s.join('').includes(c)) {
        initialized2 = true;
        alert('The super secret code is 20230701.');
    }
});
