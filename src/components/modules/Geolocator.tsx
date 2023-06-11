import React from 'react';

import GeolocatorCore from '../elements/GeolocatorCore';

import '../../styles/modules/Geolocator.scss';

function Geolocator(): React.ReactElement {
    return (
        <section className="geolocator">
            <GeolocatorCore />
        </section>
    );
}

export default Geolocator;
