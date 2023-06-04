import React from 'react';

import useTitle from '../../hooks/useTitle';

import '../../styles/status/Fallback.scss';

function Fallback(): React.ReactElement {
    useTitle('Journeys | Secret');

    return (
        <main id="fallback">
            <section>
                <h1>A Secret Page</h1>
            </section>
        </main>
    );
}

export default Fallback;
