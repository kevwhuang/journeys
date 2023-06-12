import React from 'react';

import useZustand from '../../hooks/useZustand';

import '../../styles/modules/Point.scss';

interface Props {
    id: number,
}

function Point(props: Props): React.ReactElement {
    const pins = useZustand(s => s.records.pins);
    const current = pins[props.id];

    return (
        <section className="point">
            <p>
                lat: {current.lat}
                {' | '}
                long: {current.long}
            </p>
        </section>
    );
}

export default Point;
