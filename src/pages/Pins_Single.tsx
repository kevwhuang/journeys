import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Pins_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Pin');
    React.useEffect(() => changePage(''));

    return (
        <main id="pins_single">
        </main>
    );
}

export default Pins_Single;
