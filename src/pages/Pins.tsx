import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Points from '../components/modules/Points';
import Summary from '../components/modules/Summary';

function Pins(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Pins');
    React.useEffect(() => changePage('pins'));

    return (
        <main id="pins">
            <Summary />
            <Points />
        </main>
    );
}

export default Pins;
