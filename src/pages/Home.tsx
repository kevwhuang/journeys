import React from 'react';

import Footer from '../components/modules/Footer';
import Hero from '../components/modules/Hero';

function Home(): React.ReactElement {
    return (
        <main id="home">
            <Hero />
            <Footer />
        </main>
    );
}

export default Home;
