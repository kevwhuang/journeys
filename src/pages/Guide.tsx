import React from 'react';

import useTitle from '../hooks/useTitle';

function Guide(): React.ReactElement {
    useTitle('Journeys | Guide');
    scroll(0, 0);

    return (
        <main id="guide">
        </main>
    );
}

export default Guide;
