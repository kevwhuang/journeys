import axios from 'axios';

export async function handler(event) {
    if (event.httpMethod === 'PATCH') {
        const BASE = 'https://journeys-app.onrender.com/api';

        await axios.patch(`${BASE}/users/${JSON.parse(event.body).username}`, { data: JSON.parse(event.body) });

        return {
            body: JSON.stringify({ message: 'Records updated.' }),
            statusCode: 200,
        };
    }

    return {
        body: JSON.stringify({ message: `Unknown error: ${event.httpMethod}.` }),
        statusCode: 400,
    };
}
