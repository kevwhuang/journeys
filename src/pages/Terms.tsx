import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Terms(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Terms');
    React.useEffect(() => changePage('terms'));

    return (
        <main id="terms">
        </main>
    );
}

export default Terms;
