import React from 'react';

import useTitle from '../hooks/useTitle';

function Pins(): React.ReactElement {
    useTitle('Journeys | Pins');
    scroll(0, 0);

    return (
        <main id="pins">
        </main>
    );
}

export default Pins;
