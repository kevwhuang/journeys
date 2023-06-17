import React from 'react';

import PointActions from '../elements/PointActions';
import PointMap from '../elements/PointMap';
import PointSummary from '../elements/PointSummary';

import '../../styles/modules/Point.scss';

interface Props {
    id: number,
}

function Point(props: Props): React.ReactElement {
    return (
        <section className="point">
            <PointActions />
            <PointMap />
            <PointSummary id={props.id} />
        </section>
    );
}

export default Point;
