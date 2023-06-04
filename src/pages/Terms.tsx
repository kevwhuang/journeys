import React from 'react';

import useTitle from '../hooks/useTitle';

function Terms(): React.ReactElement {
    useTitle('Journeys | Terms');
    scroll(0, 0);

    return (
        <main id="terms">
        </main>
    );
}

export default Terms;
