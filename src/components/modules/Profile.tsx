import React from 'react';

import ProfileActions from '../elements/ProfileActions';
import ProfileView from '../elements/ProfileView';

import '../../styles/modules/Profile.scss';

interface Props {
    username: string,
}

function Profile(props: Props): React.ReactElement {
    return (
        <section className="profile">
            <ProfileActions />
            <ProfileView username={props.username} />
        </section>
    );
}

export default Profile;
