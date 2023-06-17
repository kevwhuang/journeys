import React from 'react';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointSummary(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const current = pins?.[props.id - 1];

    return (
        <section className="point__summary">
            {current
                && <p>
                    lat: {current.lat}
                    {' | '}
                    long: {current.long}
                </p>
            }
        </section>
    );
}

export default PointSummary;
