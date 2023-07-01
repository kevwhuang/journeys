// @ts-ignore
import Flag from 'react-world-flags';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';

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

    function getDays(datetime: string) {
        return Math.floor((Date.now() - Date.parse(datetime)) / 1000 / 60 / 60 / 24);
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
            <section className="leaderboards__data--stats">
                <span>{stats.users} users</span>
                <span>{stats.experience} xp</span>
                <span>{stats.age} days</span>
                <span>{stats.countries} countries</span>
            </section>
            <ol>
                <li className="leaderboards__data--headers">
                    <span>
                        <LeaderboardOutlinedIcon />
                    </span>
                    <span>Title</span>
                    <span>Username</span>
                    <span>Name</span>
                    <span>
                        <CalendarMonthOutlinedIcon />
                    </span>
                    <span>
                        <FlagOutlinedIcon />
                    </span>
                </li>
                {!loading && users
                    .filter(user => `${user.username} ${user.first_name} ${user.last_name}`
                        .toLowerCase()
                        .includes(search))
                    .map((user, i) => (
                        <li className="leaderboards__data--row" key={uuid()}>
                            <span>{i + 1}</span>
                            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                            <span>{useRanking(user.experience)}</span>
                            <span>
                                <Link to={`../account/${user.username}`}>{user.username}</Link>
                            </span>
                            <span>{user.first_name} {user.last_name}</span>
                            <span>{getDays(user.registered)}</span>
                            <span>
                                <Flag
                                    code={user.country}
                                    draggable="false"
                                    fallback={<Flag code="AQ" draggable="false" />}
                                />
                            </span>
                        </li>
                    ))}
            </ol>
        </section>
    );
}

export default LeaderboardsData;
