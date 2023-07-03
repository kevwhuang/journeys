import React from 'react';

import LeaderboardsData from '../elements/LeaderboardsData';

import '../../styles/modules/Leaderboards.scss';

function Leaderboards(): React.ReactElement {
    return (
        <section className="leaderboards">
            <LeaderboardsData />
        </section>
    );
}

export default Leaderboards;
