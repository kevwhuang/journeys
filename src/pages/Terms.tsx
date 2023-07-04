import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Service from '../components/modules/Service';

function Terms(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | Terms');

    React.useEffect(() => {
        changePage('terms');
        scroll(0, 0);
    }, []);

    return (
        <main id="terms">
            <Service />
            {!navbar && <Footer />}
        </main>
    );
}

export default Terms;
