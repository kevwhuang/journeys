// @ts-ignore
import Flag from 'react-world-flags';
import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import useAxios from '../../hooks/useAxios';
import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

import defaultPhoto from '../../assets/default-photo.webp';

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
            {!loading && (<>
                <img
                    src={profile[0].photo || defaultPhoto}
                    alt={profile[0].username}
                    draggable="false"
                />
                <Flag
                    code={profile[0].country}
                    height={24}
                    fallback={<Flag code="AQ" height={24} />}
                />
                <p>Name: {profile[0].first_name} {profile[0].last_name}</p>
                <p>Username: {profile[0].username}</p>
                <p>Rank: {useRanking(profile[0].experience)}</p>
                <p>Since: {profile[0].registered.slice(0, 10)}</p>
                <p>Page: {profile[0].page}</p>
                <p>Bio: {profile[0].bio}</p>
            </>)}
        </section>
    );
}

export default ProfileView;
