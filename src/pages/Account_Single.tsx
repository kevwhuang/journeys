import React from 'react';
import { useParams } from 'react-router-dom';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Profile from '../components/modules/Profile';

function Account_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);
    const username = useParams().username;

    useTitle('Journeys | Profile');

    React.useEffect(() => {
        changePage('');
        scroll(0, 0);
    }, []);

    return (
        <main id="account_single">
            <Profile username={username ?? ''} />
        </main>
    );
}

export default Account_Single;
