import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Settings from '../components/modules/Settings';

function Account(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    useTitle('Journeys | Account');

    React.useEffect(() => {
        changePage('account');
        scroll(0, 0);
    }, []);

    return (
        <main id="account">
            <Settings />
        </main>
    );
}

export default Account;
