import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Actions from '../components/modules/Actions';
import Collage from '../components/modules/Collage';
import Features from '../components/modules/Features';
import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';

function Home(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | Home');

    React.useEffect(() => {
        changePage('home');
        scroll(0, 0);
    }, []);

    return (
        <main id="home">
            <Hero />
            <Features />
            <Actions />
            <Collage />
            {!navbar && <Footer />}
        </main>
    );
}

export default Home;
