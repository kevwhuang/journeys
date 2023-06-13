import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Actions from '../components/modules/Actions';
import Collage from '../components/modules/Collage';
import Features from '../components/modules/Features';
import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';

function Home(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | Home');
    React.useEffect(() => changePage('home'));

    return (
        <main id="home">
            <Hero />
            <Features />
            <Actions />
            <Collage />
            <div className="home--gutter"></div>
            <Footer />
        </main>
    );
}

export default Home;
