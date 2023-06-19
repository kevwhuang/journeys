import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'POST') {
        const BASE = 'https://journeys-app.onrender.com/api';

        await axios.post(`${BASE}/users`, { data: JSON.parse(event.body) });

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
