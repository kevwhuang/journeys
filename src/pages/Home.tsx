import React from 'react';

import useTitle from '../hooks/useTitle';

import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';

function Home(): React.ReactElement {
    useTitle('Journeys | Home');

    return (
        <main id="home">
            <Hero />
            <Footer />
        </main>
    );
}

export default Home;
