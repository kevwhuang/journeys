import React from 'react';

import Policy from '../components/modules/Policy';

import useTitle from '../hooks/useTitle';

function Privacy(): React.ReactElement {
    useTitle('Journeys | Privacy');

    return (
        <main id="privacy">
            <Policy />
        </main>
    );
}

export default Privacy;
