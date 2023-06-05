import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Policy from '../components/modules/Policy';

function Privacy(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Privacy');
    React.useEffect(() => changePage(''));

    return (
        <main id="privacy">
            <Policy />
        </main>
    );
}

export default Privacy;
