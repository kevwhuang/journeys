import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function About(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | About');
    React.useEffect(() => changePage('about'));

    return (
        <main id="about">
        </main>
    );
}

export default About;
