import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import useZustand from '../../hooks/useZustand';

interface User {
    country: string,
    experience: number,
    first_name: string,
    id: number,
    last_name: string,
    photo: string,
    registered: string,
    username: string,
}

function LeaderboardsData(): React.ReactElement {
    const [refresh, search] = useZustand(s => [s.refresh, s.search]);
    const [users, setUsers]: [User[], any] = React.useState([]);

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/get');

            setUsers(res.data);
        }());
    }, [refresh]);

    return (
        <section className="leaderboards__data">
            <ul>
                {users.filter(user => user.username.includes(search))
                    .map(user => (
                        <li key={uuid()}>
                            <img src={user.photo || '/icons/favicon-16x16.png'} alt={`${user.username}`} />
                            {' | '}
                            <span>{user.username}</span>
                            {' | '}
                            <span>{user.first_name} {user.last_name}</span>
                            {' | '}
                            <span>{user.country}</span>
                            {' | '}
                            <span>{user.registered.slice(0, 10)}</span>
                            {' | '}
                            <span>{user.experience}</span>
                            {' | '}
                            <Link to={`../account/${user.username}`}>view</Link>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default LeaderboardsData;
