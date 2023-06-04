import React from 'react';

import useTitle from '../../hooks/useTitle';

import '../../styles/status/NotFound.scss';

function NotFound(): React.ReactElement {
    useTitle('Journeys | 404');

    return (
        <main id="not-found">
            <section>
                <h1>404: Page Not Found</h1>
            </section>
        </main>
    );
}

export default NotFound;
