import React from 'react';

import ViewOverlay from '../elements/ViewOverlay';

import '../../styles/modules/View.scss';

function View(): React.ReactElement {
    return (
        <section className="view">
            <ViewOverlay />
        </section>
    );
}

export default View;
