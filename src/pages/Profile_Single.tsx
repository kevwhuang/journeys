import React from 'react';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

function Profile_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);

    scroll(0, 0);
    useTitle('Journeys | Profile');
    React.useEffect(() => changePage(''));

    return (
        <main id="profile_single">
        </main>
    );
}

export default Profile_Single;
