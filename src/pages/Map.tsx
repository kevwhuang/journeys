import React from 'react';

import useTitle from '../hooks/useTitle';

function Map(): React.ReactElement {
    useTitle('Journeys | Map');
    scroll(0, 0);

    return (
        <main id="map">
        </main>
    );
}

export default Map;
