import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Leaderboards from '../components/modules/Leaderboards';
import Stats from '../components/modules/Stats';

function Rankings(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Rankings');
    React.useEffect(() => changePage('rankings'));

    return (
        <main id="rankings">
            <Stats />
            <Leaderboards />
        </main>
    );
}

export default Rankings;
