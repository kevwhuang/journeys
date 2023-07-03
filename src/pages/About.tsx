import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Story from '../components/modules/Story';

function About(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | About');

    React.useEffect(() => {
        changePage('about');
        scroll(0, 0);
    }, []);

    return (
        <main id="about">
            <Story />
            {!navbar && <Footer />}
        </main>
    );
}

export default About;
