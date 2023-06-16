import axios from 'axios';

const BASE = process.env.VITE_SERVER_BASE;

export async function handler(event) {
    if (event.httpMethod === 'GET') {
        const res = await axios(`${BASE}/users`);

        return {
            body: JSON.stringify(res.data),
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unsupported method: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
