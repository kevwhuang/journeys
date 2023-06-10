import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Account(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Account');
    React.useEffect(() => changePage('account'));

    return (
        <main id="account">
        </main>
    );
}

export default Account;
