import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Accordions from '../components/modules/Accordions';
import Footer from '../components/modules/Footer';

function Guide(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | Guide');

    React.useEffect(() => {
        changePage('guide');
        scroll(0, 0);
    }, []);

    return (
        <main id="guide">
            <Accordions />
            {!navbar && <Footer />}
        </main>
    );
}

export default Guide;
