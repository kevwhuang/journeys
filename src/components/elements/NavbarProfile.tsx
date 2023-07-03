import React from 'react';

import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

import defaultPhoto from '../../assets/default-photo.webp';

function NavbarProfile(): React.ReactElement {
    const [experience, first, photo]
        = useZustand(s => [s.records.experience, s.user.first, s.user.photo]);

    return (
        <section className="navbar__profile">
            <img
                src={photo || defaultPhoto}
                alt="Profile"
                draggable="false"
            />
            <span>
                {first ? `${first[0]}${first.slice(1)}` : 'New User'}
            </span>
            <span>
                {useRanking(experience)[0].toLowerCase()}
                {useRanking(experience).slice(1)}
            </span>
        </section>
    );
}

export default NavbarProfile;
