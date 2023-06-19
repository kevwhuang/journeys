import React from 'react';
import { Link } from 'react-router-dom';

function ProfileActions(): React.ReactElement {
    return (
        <section className="profile__actions">
            <Link to="../../rankings">Back</Link>
        </section>
    );
}

export default ProfileActions;
