import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

import ViewMap from './ViewMap';
import ViewRender from './ViewRender';

function ViewWrapper(): React.ReactElement {
    return (
        <section className="view__wrapper">
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

export default ViewWrapper;
