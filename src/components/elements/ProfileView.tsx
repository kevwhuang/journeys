import React from 'react';
import { v4 as uuid } from 'uuid';

import CircularProgress from '@mui/material/CircularProgress';

import useAxios from '../../hooks/useAxios';
import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

interface Axios {
    data: Profile[],
    loading: boolean,
    mutate: any,
}

interface Profile {
    bio: string,
    country: string,
    experience: number,
    first_name: string,
    id: number,
    last_name: string,
    page: string,
    photo: string,
    registered: string,
    username: string,
}

interface Props {
    username: string,
}

function ProfileView(props: Props): React.ReactElement {
    const navbar = useZustand(s => s.navbar);

    const { data: profile, loading }: Axios = useAxios({
        endpoint: 'getUser',
        options: {
            headers: {
                'x-username': props.username,
            },
        },
    });

    function getClassName() {
        let className = loading ? 'profile__view--spinner' : 'profile__view--spinner loaded';

        if (navbar) className += ' opened';
        return className;
    }

    return (
        <section className="profile__view">
            <div className={getClassName()}>
                <CircularProgress size={'121.5px'} />
            </div>
            <ul>
                {!loading && profile.map(field => (
                    <li key={uuid()}>
                        <img
                            src={field.photo || '/icons/favicon-16x16.png'}
                            alt={`${field.username}`}
                            draggable="false"
                        />
                        {' | '}
                        <span>{field.username}</span>
                        {' | '}
                        <span>{field.first_name} {field.last_name}</span>
                        {' | '}
                        <span>{field.country}</span>
                        {' | '}
                        <span>{field.registered.slice(0, 10)}</span>
                        {' | '}
                        <span>{useRanking(field.experience)}</span>
                        {' | '}
                        <span>{field.page}</span>
                        {' | '}
                        <span>{field.bio}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProfileView;
