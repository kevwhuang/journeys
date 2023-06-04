import React from 'react';

import useTitle from '../hooks/useTitle';

function About(): React.ReactElement {
    useTitle('Journeys | About');
    scroll(0, 0);

    return (
        <main id="about">
        </main>
    );
}

export default About;
