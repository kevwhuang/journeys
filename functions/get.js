'use strict';

import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'GET') {
        const BASE = process.env.NETLIFY_SERVER_BASE;

        const res = await axios(`${BASE}/users`)
            .catch(err => console.log(err));

        return {
            body: JSON.stringify(res.data),
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
