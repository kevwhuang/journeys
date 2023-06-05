import React from 'react';

import useTitle from '../../hooks/useTitle';
import useZustand from '../../hooks/useZustand';

import '../../styles/status/Error.scss';

function Error(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | 400');
    React.useEffect(() => changePage(''));

    return (
        <main id="error">
            <section>
                <h1>400: Unknown Error</h1>
            </section>
        </main>
    );
}

export default Error;
