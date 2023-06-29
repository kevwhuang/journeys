import React from 'react';

import ProfileView from '../elements/ProfileView';

import '../../styles/modules/Profile.scss';

interface Props {
    username: string,
}

function Profile(props: Props): React.ReactElement {
    return (
        <section className="profile">
            <ProfileView username={props.username} />
        </section>
    );
}

export default Profile;
