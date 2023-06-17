import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import CircularProgress from '@mui/material/CircularProgress';

import useAxios from '../../hooks/useAxios';
import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

interface Axios {
    data: User[],
    loading: boolean,
    mutate: any,
}

interface User {
    country: string,
    experience: number,
    first_name: string,
    id: number,
    last_name: string,
    registered: string,
    username: string,
}

function LeaderboardsData(): React.ReactElement {
    const [refresh, search] = useZustand(s => [s.refresh, s.search]);
    const { data: users, loading, mutate }: Axios = useAxios({ endpoint: 'get' });

    React.useEffect(() => {
        (async function get() {
            mutate([]);
        }());
    }, [mutate, refresh]);

    return (
        <section className="leaderboards__data">
            <div className={loading ? 'leaderboards__data--spinner' : 'leaderboards__data--spinner loaded'}>
                <CircularProgress size={'121.5px'} />
            </div>
            <ul>
                {!loading && users.filter(user => user.username.includes(search))
                    .map(user => (
                        <li key={uuid()}>
                            <span>{user.username}</span>
                            {' | '}
                            <span>{user.first_name} {user.last_name}</span>
                            {' | '}
                            <span>{user.country}</span>
                            {' | '}
                            <span>{user.registered.slice(0, 10)}</span>
                            {' | '}
                            <span>{useRanking(user.experience)}</span>
                            {' | '}
                            <Link to={`../account/${user.username}`}>view</Link>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default LeaderboardsData;
