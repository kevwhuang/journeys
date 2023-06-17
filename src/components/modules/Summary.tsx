import React from 'react';

import SummaryStats from '../elements/SummaryStats';

import '../../styles/modules/Summary.scss';

function Summary(): React.ReactElement {
    return (
        <section className="summary">
            <SummaryStats />
        </section>
    );
}

export default Summary;
