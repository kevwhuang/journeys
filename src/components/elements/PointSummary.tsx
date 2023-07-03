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
            <p>{address}</p>
            {lat
                && <p>
                    lat: {lat}
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    long: {long}
                </p>
            }
        </section>
    );
}

export default PointSummary;
