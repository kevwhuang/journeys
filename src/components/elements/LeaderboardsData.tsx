// @ts-ignore
import Flag from 'react-world-flags';
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
    last_name: string,
    registered: string,
    username: string,
}

function LeaderboardsData(): React.ReactElement {
    const [navbar, refresh, search] = useZustand(s => [s.navbar, s.refresh, s.search]);
    const [stats, setStats]: any = React.useState({});
    const { data: users, loading, mutate }: Axios = useAxios({ endpoint: 'get' });

    React.useEffect(() => {
        (async function get() {
            mutate([]);
        }());
    }, [refresh]);

    React.useEffect(() => {
        const totalCountries = new Set();
        let totalAge = 0;
        let totalExperience = 0n;

        if (!users) return;

        for (const user of users) {
            user.country && totalCountries.add(user.country);
            totalAge += (Date.now() - Date.parse(user.registered)) / 1000 / 60 / 60 / 24;
            totalExperience += BigInt(user.experience);
        }

        setStats({
            age: Math.ceil(totalAge),
            countries: totalCountries.size,
            experience: (totalExperience / 1000000n).toString(),
            users: users.length,
        });
    }, [users]);

    function getAge(datetime: string) {
        const difference = Date.now() - Date.parse(datetime);

        return Math.floor(difference / 1000 / 60 / 60 / 24);
    }

    function getClassName() {
        let className = loading ? 'leaderboards__data--spinner' : 'leaderboards__data--spinner loaded';

        if (navbar) className += ' opened';
        return className;
    }

    return (
        <section className="leaderboards__data">
            <div className={getClassName()}>
                <CircularProgress size={'121.5px'} />
            </div>
            <ol>
                <li className="leaderboards__data--stats">
                    <span>Users: {stats.users}</span>
                    {' | '}
                    <span>Experience: {stats.experience} million</span>
                    {' | '}
                    <span>Countries: {stats.countries}</span>
                    {' | '}
                    <span>Age: {stats.age} days</span>
                </li>
                <li className="leaderboards__data--headers">
                    <span>#</span>
                    {' | '}
                    <span>Rank</span>
                    {' | '}
                    <span>Username</span>
                    {' | '}
                    <span>Name</span>
                    {' | '}
                    <span>Country</span>
                    {' | '}
                    <span>Age</span>
                </li>
                {!loading && users.filter(user => user.username.includes(search))
                    .map((user, i) => (
                        <li key={uuid()}>
                            {i + 1}
                            {' | '}
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <span>{useRanking(user.experience)}</span>
                            {' | '}
                            <Link to={`../account/${user.username}`}>{user.username}</Link>
                            {' | '}
                            <span>{user.first_name} {user.last_name}</span>
                            {' | '}
                            <span>
                                <Flag
                                    code={user.country}
                                    height={36}
                                    fallback={<Flag code="AQ" height={36} />}
                                />
                            </span>
                            {' | '}
                            <span>{getAge(user.registered)} days</span>
                        </li>
                    ))}
            </ol>
        </section>
    );
}

export default LeaderboardsData;
