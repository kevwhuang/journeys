'use strict';

import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'GET') {
        const BASE = 'https://maps.googleapis.com/maps/api/geocode/json?';
        const KEY = `&key=${process.env.NETLIFY_GMP_API_KEY}`;
        const endpoint = `${BASE}${event.headers['x-coordinates']}${KEY}`;

        const res = await axios(endpoint)
            .catch(err => console.log(err));

        const address = res.data.results.length
            ? res.data.results[0].formatted_address
            : 'Unknown Address';

        return {
            body: address,
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
