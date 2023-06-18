import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'DELETE') {
        const BASE = 'https://journeys-app.onrender.com/api';

        await axios.delete(`${BASE}/users/${event.headers['x-username']}`);
        return { statusCode: 204 };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
