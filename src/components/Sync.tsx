import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import useZustand from '../hooks/useZustand';

function Sync(): React.ReactElement {
    const [experience, notifications]
        = useZustand(s => [s.records.experience, s.records.notifications]);
    const { user } = useAuth0();

    React.useEffect(() => {
        const interval = setInterval(async () => {
            if (!user) return;

            await axios('/.netlify/functions/patchUser', {
                data: {
                    experience,
                    notifications: JSON.stringify(notifications),
                    username: user.nickname,
                },
                method: 'PATCH',
            });
        }, 300e3);

        return () => clearInterval(interval);
    }, [user]);

    return <></>;
}

export default Sync;
