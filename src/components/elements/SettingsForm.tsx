import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuid } from 'uuid';

interface Profile {
    bio: string,
    country: string,
    first_name: string,
    id: number,
    last_name: string,
    map: number,
    page: string,
    photo: string,
    registered: string,
    theme: number,
    units: number,
    username: string,
}

function SettingsForm(): React.ReactElement {
    const [settings, setSettings]: [Profile[], any] = React.useState([]);
    const { user }: any = useAuth0();

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/getSettings', {
                headers: {
                    'x-username': user.nickname,
                },
            });

            setSettings(res.data);
        }());
    }, [user.nickname]);

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
                        <span>{field.page}</span>
                        {' | '}
                        <span>{field.bio}</span>
                        {' | '}
                        <span>{field.registered.slice(0, 10)}</span>
                        {' | '}
                        <span>{field.theme}</span>
                        {' | '}
                        <span>{field.units}</span>
                        {' | '}
                        <span>{field.map}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default SettingsForm;
