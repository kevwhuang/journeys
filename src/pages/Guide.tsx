import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Accordions from '../components/modules/Accordions';
import Footer from '../components/modules/Footer';

function Guide(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Guide');
    React.useEffect(() => changePage('guide'));

    return (
        <main id="guide">
            <Accordions />
            <Footer />
        </main>
    );
}

export default Guide;
