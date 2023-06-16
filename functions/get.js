import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'GET') {
        const BASE = 'https://journeys-app.onrender.com/api';
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
