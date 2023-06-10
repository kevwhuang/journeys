import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Account_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Account');
    React.useEffect(() => changePage(''));

    return (
        <main id="account_single">
        </main>
    );
}

export default Account_Single;
