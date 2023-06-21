import React from 'react';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointSummary(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const { address, lat, long } = pins?.[props.id - 1];

    return (
        <section className="point__summary">
            {lat
                && <p>
                    lat: {lat}
                    {' | '}
                    long: {long}
                </p>
            }
            <p>{address}</p>
        </section>
    );
}

export default PointSummary;
