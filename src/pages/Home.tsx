import React from 'react';

import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';
import Status from '../components/modules/Status';

function Home(): React.ReactElement {
    return (
        <>
            <main id="home">
                <Status />
                <Hero />
                <Footer />
            </main>
        </>
    );
}

export default Home;
