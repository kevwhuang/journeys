import React from 'react';

import '../../styles/modules/Profile.scss';

interface Props {
    id: number,
}

function Profile(props: Props): React.ReactElement {
    return (
        <section className="profile">
            {props.id}
        </section>
    );
}

export default Profile;
