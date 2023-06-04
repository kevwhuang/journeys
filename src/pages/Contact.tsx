import React from 'react';

import useTitle from '../hooks/useTitle';

function Contact(): React.ReactElement {
    useTitle('Journeys | Contact');
    scroll(0, 0);

    return (
        <main id="contact">
        </main>
    );
}

export default Contact;
