import React from 'react';

import PointsTable from '../elements/PointsTable';

import '../../styles/modules/Points.scss';

function Points(): React.ReactElement {
    return (
        <section className="points">
            <PointsTable />
        </section>
    );
}

export default Points;
