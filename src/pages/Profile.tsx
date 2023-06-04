import React from 'react';

import useTitle from '../hooks/useTitle';

function Profile(): React.ReactElement {
    useTitle('Journeys | Profile');

    return (
        <main id="profile">
        </main>
    );
}

export default Profile;
