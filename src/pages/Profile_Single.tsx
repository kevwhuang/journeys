import React from 'react';

import useTitle from '../hooks/useTitle';

function Profile_Single(): React.ReactElement {
    useTitle('Journeys | Profile');
    scroll(0, 0);

    return (
        <main id="profile_single">
        </main>
    );
}

export default Profile_Single;
