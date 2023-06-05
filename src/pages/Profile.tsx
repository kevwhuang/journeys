import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Profile(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Profile');
    React.useEffect(() => changePage('profile'));

    return (
        <main id="profile">
        </main>
    );
}

export default Profile;
