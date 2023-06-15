import axios from 'axios';

const BASE = process.env.VITE_SERVER_BASE;

async function handler(event) {
    if (event.httpMethod === 'GET') {
        const res = await axios(`${BASE}/users`);

        return {
            body: JSON.stringify(res.data),
            statusCode: 200,
        };
    } else {
        return {
            body: JSON.stringify({ message: `Unsupported method: ${event.httpMethod}.` }),
            statusCode: 400,
        };
    }
}

export { handler };
