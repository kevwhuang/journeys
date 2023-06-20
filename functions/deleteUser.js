import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'DELETE') {
        const BASE = process.env.NETLIFY_SERVER_BASE;

        await axios.delete(`${BASE}/users/${event.headers['x-username']}`)
            .catch(err => console.log(err));

        return { statusCode: 204 };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
