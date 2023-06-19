import React from 'react';

import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

function NavbarProfile(): React.ReactElement {
    const [experience, first, last, photo]
        = useZustand(s => [s.records.experience, s.user.first, s.user.last, s.user.photo]);

    return (
        <section className="navbar__profile">
            <img
                src={photo}
                alt=" "
                draggable="false"
            />
            <span>
                {first ? `${first[0].toUpperCase()}${first.slice(1)}` : 'New'}
                &nbsp;
                {last ? `${last[0].toUpperCase()}${last.slice(1)}` : 'User'}
            </span>
            <span>
                {useRanking(experience)[0].toLowerCase()}
                {useRanking(experience).slice(1)}
            </span>
        </section>
    );
}

export default NavbarProfile;
