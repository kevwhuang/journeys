import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';

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

function SettingsForm(): React.ReactElement {
    const [settings, setSettings]: [Profile[], Function] = React.useState([]);
    const { user }: any = useAuth0();

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/getUser', {
                headers: {
                    'X-Username': user.nickname,
                },
            });

            setSettings(res.data);
        }());
    }, []);

    return (
        <section className="settings__form">
            <ul>
                {settings.map(field => (
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
                        <span>{field.experience}</span>
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

export default SettingsForm;
