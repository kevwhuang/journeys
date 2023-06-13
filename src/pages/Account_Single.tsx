import React from 'react';
import { useParams } from 'react-router-dom';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Profile from '../components/modules/Profile';

function Account_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);
    const id = useParams().id;

    scroll(0, 0);
    useTitle('Journeys | Account');
    React.useEffect(() => changePage(''));

    return (
        <main id="account_single">
            <Profile id={Number(id)} />
        </main>
    );
}

export default Account_Single;
