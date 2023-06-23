import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

import useZustand from '../../hooks/useZustand';

import ViewMap from './ViewMap';
import ViewRender from './ViewRender';

function ViewOverlay(): React.ReactElement {
    const tracks = useZustand(s => s.tracks);

    tracks;

    return (
        <section className="view__overlay">
            <Wrapper
                apiKey={import.meta.env.VITE_LOCAL_GMP_API_KEY
                    || 'AIzaSyD85Q1bw8sPrcsYutSH5TWQ--ZMTPlWKhs'}
                render={ViewRender}
            >
                <ViewMap />
            </Wrapper>
        </section>
    );
}

export default ViewOverlay;
