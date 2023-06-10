import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Story from '../components/modules/Story';

function About(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | About');
    React.useEffect(() => changePage('about'));

    return (
        <main id="about">
            <Story />
            <Footer />
        </main>
    );
}

export default About;
