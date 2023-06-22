import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

import useZustand from '../../hooks/useZustand';

import ViewMap from './ViewMap';
import ViewRender from './ViewRender';

function ViewOverlay(): React.ReactElement {
    const [position, tracks] = useZustand(s => [s.position, s.tracks]);

    const center = { lat: position.lat, lng: position.long };

    tracks;

    return (
        <section className="view__overlay">
            <Wrapper
                apiKey={import.meta.env.VITE_LOCAL_GMP_API_KEY
                    || 'AIzaSyD85Q1bw8sPrcsYutSH5TWQ--ZMTPlWKhs'}
                render={ViewRender}
            >
                <ViewMap
                    center={center}
                    zoom={15}
                />
            </Wrapper>
        </section>
    );
}

export default ViewOverlay;
