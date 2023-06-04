import React from 'react';

import useTitle from '../../hooks/useTitle';

import '../../styles/status/Error.scss';

function Error(): React.ReactElement {
    useTitle('Journeys | 400');

    return (
        <main id="error">
            <section>
                <h1>400: Unknown Error</h1>
            </section>
        </main>
    );
}

export default Error;
