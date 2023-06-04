import React from 'react';

import useTitle from '../hooks/useTitle';

function Rankings(): React.ReactElement {
    useTitle('Journeys | Rankings');
    scroll(0, 0);

    return (
        <main id="rankings">
        </main>
    );
}

export default Rankings;
