import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Point from '../components/modules/Point';

function Pins_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Pin');
    React.useEffect(() => changePage(''));

    return (
        <main id="pins_single">
            <Point />
        </main>
    );
}

export default Pins_Single;
