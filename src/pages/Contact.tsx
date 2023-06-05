import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Contact(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Contact');
    React.useEffect(() => changePage('contact'));

    return (
        <main id="contact">
        </main>
    );
}

export default Contact;
