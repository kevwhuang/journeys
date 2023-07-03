import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Footer from '../components/modules/Footer';
import Form from '../components/modules/Form';

function Contact(): React.ReactElement {
    const [changePage, navbar] = useZustand(s => [s.changePage, s.navbar]);

    useTitle('Journeys | Contact');

    React.useEffect(() => {
        changePage('contact');
        scroll(0, 0);
    }, []);

    return (
        <main id="contact">
            <Form />
            {!navbar && <Footer />}
        </main>
    );
}

export default Contact;
