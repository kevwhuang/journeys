import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Map(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Map');
    React.useEffect(() => changePage('map'));

    return (
        <main id="map">
        </main>
    );
}

export default Map;
