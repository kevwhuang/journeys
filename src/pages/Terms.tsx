import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Service from '../components/modules/Service';

function Terms(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Terms');
    React.useEffect(() => changePage('terms'));

    return (
        <main id="terms">
            <Service />
            <Footer />
        </main>
    );
}

export default Terms;
