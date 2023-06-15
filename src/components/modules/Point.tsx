import React from 'react';

import useZustand from '../../hooks/useZustand';

import PointActions from '../elements/PointActions';

import '../../styles/modules/Point.scss';

interface Props {
    id: number,
}

function Point(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const current = pins?.[props.id - 1];

    return (
        <section className="point">
            <PointActions />
            {!current
                ? <p>Pin not found.</p>
                : <p>
                    lat: {current.lat}
                    {' | '}
                    long: {current.long}
                </p>
            }
        </section>
    );
}

export default Point;
