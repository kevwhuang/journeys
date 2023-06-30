import React from 'react';

import useZustand from '../../hooks/useZustand';

import PointActions from '../elements/PointActions';
import PointMap from '../elements/PointMap';
import PointSummary from '../elements/PointSummary';
import PointView from '../elements/PointView';

import '../../styles/modules/Point.scss';

interface Props {
    id: number,
}

function Point(props: Props): React.ReactElement {
    const navbar = useZustand(s => s.navbar);

    return (
        <section className={navbar ? 'point opened' : 'point'}>
            <PointMap id={props.id} />
            <PointView id={props.id} />
            <PointSummary id={props.id} />
            <PointActions id={props.id} />
        </section>
    );
}

export default Point;
