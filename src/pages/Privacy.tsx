import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Policy from '../components/modules/Policy';

function Privacy(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | Privacy');

    React.useEffect(() => {
        changePage('privacy');
        scroll(0, 0);
    }, []);

    return (
        <main id="privacy">
            <Policy />
            {!navbar && <Footer />}
        </main>
    );
}

export default Privacy;
