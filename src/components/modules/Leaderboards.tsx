import React from 'react';

import LeaderboardsData from '../elements/LeaderboardsData';
import LeaderboardsHeaders from '../elements/LeaderboardsHeaders';

import '../../styles/modules/Leaderboards.scss';

function Leaderboards(): React.ReactElement {
    return (
        <section className="leaderboards">
            <LeaderboardsHeaders />
            <LeaderboardsData />
        </section>
    );
}

export default Leaderboards;
