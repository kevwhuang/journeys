import React from 'react';

import useTitle from '../hooks/useTitle';

function Pins_Single(): React.ReactElement {
    useTitle('Journeys | Pin');
    scroll(0, 0);

    return (
        <main id="pins_single">
        </main>
    );
}

export default Pins_Single;
