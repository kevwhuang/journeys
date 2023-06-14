import React from 'react';

import ProfileActions from '../elements/ProfileActions';

import '../../styles/modules/Profile.scss';

interface Props {
    id: number,
}

function Profile(props: Props): React.ReactElement {
    return (
        <section className="profile">
            <ProfileActions />
            {props.id}
        </section>
    );
}

export default Profile;
