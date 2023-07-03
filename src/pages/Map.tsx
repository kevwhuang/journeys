import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Geolocator from '../components/modules/Geolocator';
import View from '../components/modules/View';

function Map(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | Map');

    React.useEffect(() => {
        changePage('map');
        scroll(0, 0);
    }, []);

    return (
        <main id="map">
            <Geolocator />
            <View />
        </main>
    );
}

export default Map;
