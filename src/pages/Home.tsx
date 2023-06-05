import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';

function Home(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | Home');
    React.useEffect(() => changePage('home'));

    return (
        <main id="home">
            <Hero />
            <Footer />
        </main>
    );
}

export default Home;
