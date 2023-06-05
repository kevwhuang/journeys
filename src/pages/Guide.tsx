import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Guide(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Guide');
    React.useEffect(() => changePage('guide'));

    return (
        <main id="guide">
        </main>
    );
}

export default Guide;
