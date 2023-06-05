import React from 'react';

import useTitle from '../../hooks/useTitle';
import useZustand from '../../hooks/useZustand';

import '../../styles/status/Fallback.scss';

function Fallback(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | Secret');
    React.useEffect(() => changePage(''));

    return (
        <main id="fallback">
            <section>
                <h1>A Secret Page</h1>
            </section>
        </main>
    );
}

export default Fallback;
