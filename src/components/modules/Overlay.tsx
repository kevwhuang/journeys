import React from 'react';

import OverlayMap from '../elements/OverlayMap';

import '../../styles/modules/Overlay.scss';

function Overlay(): React.ReactElement {
    return (
        <section className="overlay">
            <OverlayMap />
        </section>
    );
}

export default Overlay;
