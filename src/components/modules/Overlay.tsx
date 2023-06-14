import React from 'react';
import { v4 as uuid } from 'uuid';

import useZustand from '../../hooks/useZustand';

import '../../styles/modules/Overlay.scss';

function Overlay(): React.ReactElement {
    const tracks = useZustand(s => s.tracks);

    return (
        <section className="overlay">
            {[...tracks].map(point => (
                <p key={uuid()}>
                    lat: {point.slice(0, point.indexOf(','))}
                    {' | '}
                    long: {point.slice(point.indexOf(',') + 1)}
                </p>
            ))}
        </section>
    );
}

export default Overlay;
