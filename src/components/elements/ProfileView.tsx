import React from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import useRanking from '../../hooks/useRanking';

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
    const [profile, setProfile]: [Profile[], any] = React.useState([]);

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/getUser', {
                headers: {
                    'X-Username': props.username,
                },
            });

            setProfile(res.data);
        }());
    }, [props.username]);

    return (
        <section className="profile__view">
            {!profile.length
                ? <p>Profile not found.</p>
                : <ul>
                    {profile.map(field => (
                        <li key={uuid()}>
                            <img src={field.photo || '/icons/favicon-16x16.png'} alt={`${field.username}`} />
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
            }
        </section>
    );
}

export default ProfileView;
