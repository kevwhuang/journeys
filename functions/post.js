'use strict';

import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'POST') {
        const BASE = process.env.NETLIFY_SERVER_BASE;

        await axios.post(`${BASE}/users`,
            {
                data: JSON.parse(event.body),
            })
            .catch(err => console.log(err));

        return {
            body: JSON.stringify({ message: 'Account created.' }),
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
