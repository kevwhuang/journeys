import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import useZustand from '../hooks/useZustand';

import actions from '../features/actions';
import initializers from '../features/initializers';

const defaultNotifications = [
    {
        subject: 'New Theme',
        message: 'Dark mode is now supported.',
        priority: 1,
    }, {
        subject: 'Setup Your Profile',
        message: 'Add your first and last name.',
        priority: 1,
    }, {
        subject: 'Welcome',
        message: 'Embark on your first Journey.',
        priority: 2,
    },
];

let initialized = false;

function Initialize(): React.ReactElement {
    const state = useZustand();
    const [initializeRecords, initializeSystem, initializeUser]
        = useZustand(s => [s.initializeRecords, s.initializeSystem, s.initializeUser]);
    const { user } = useAuth0();

    React.useEffect(() => {
        (async function newUser() {
            if (!initialized && user) {
                const res = await axios('/.netlify/functions/getUser',
                    {
                        headers: {
                            'x-username': user.nickname,
                        },
                    })
                    .catch(err => console.log(err));

                if (res && !res.data.length) {
                    await axios('/.netlify/functions/post',
                        {
                            data: {
                                email: user.email,
                                notifications: JSON.stringify(defaultNotifications),
                                username: user.nickname,
                            },
                            method: 'POST',
                        })
                        .catch(err => console.log(err));
                } else {
                    const res = await axios('/.netlify/functions/getSettings',
                        {
                            headers: {
                                'x-username': user.nickname,
                            },
                        })
                        .catch(err => console.log(err));

                    const data = res && res.data[0];

                    initializeRecords({
                        experience: data.experience,
                        notifications: initializers.notifications(data.notifications),
                    });

                    initializeSystem({
                        map: data.map,
                        theme: data.theme,
                        units: data.units,
                    });

                    initializeUser({
                        first: data.first_name,
                        last: data.last_name,
                        photo: data.photo,
                    });

                    actions.toggleTheme(state, data.theme);
                }

                initialized = true;
            }
        }());
    }, [state, user]);

    return <></>;
}

export default Initialize;
