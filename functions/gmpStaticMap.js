'use strict';

import axios from 'axios';
import crypto from 'crypto';

function sign(path, secret) {
    const url = new URL(path);

    const hashedSignature = crypto
        .createHmac('sha1', Buffer
            .from(secret
                .replace(/-/g, '+')
                .replace(/_/g, '/'), 'base64'))
        .update(`${url.pathname}${url.search}`)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    return `${url.href}&signature=${hashedSignature}`;
}

export async function handler(event) {
    if (event.httpMethod === 'GET') {
        const BASE = 'https://maps.googleapis.com/maps/api/staticmap?';
        const KEY = `&key=${process.env.NETLIFY_GMP_API_KEY}`;
        const endpoint = `${BASE}${KEY}${event.headers['x-endpoint']}`;
        const signedEndpoint = sign(endpoint, process.env.NETLIFY_GMP_SECRET);

        const res = await axios(signedEndpoint,
            {
                responseType: 'arraybuffer',
            })
            .catch(err => console.log(err));

        return {
            body: Buffer.from(res.data, 'binary').toString('base64'),
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
