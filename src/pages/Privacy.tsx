import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Policy from '../components/modules/Policy';

function Privacy(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Privacy');
    React.useEffect(() => changePage('privacy'));

    return (
        <main id="privacy">
            <Policy />
            <Footer />
        </main>
    );
}

export default Privacy;
