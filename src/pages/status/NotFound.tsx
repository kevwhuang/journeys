import React from 'react';

import useTitle from '../../hooks/useTitle';
import useZustand from '../../hooks/useZustand';

import '../../styles/status/NotFound.scss';

function NotFound(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | 404');
    React.useEffect(() => changePage(''));

    return (
        <main id="not-found">
            <section>
                <h1>404: Page Not Found</h1>
            </section>
        </main>
    );
}

export default NotFound;
