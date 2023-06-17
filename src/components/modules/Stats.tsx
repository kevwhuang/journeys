import React from 'react';

import StatsSummary from '../elements/StatsSummary';

import '../../styles/modules/Stats.scss';

function Stats(): React.ReactElement {
    return (
        <section className="stats">
            <StatsSummary />
        </section>
    );
}

export default Stats;
