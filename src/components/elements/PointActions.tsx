import React from 'react';
import { Link } from 'react-router-dom';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointActions(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const { lat, long } = pins?.[props.id - 1];

    return (
        <section className="point__actions">
            <Link to="..">Back</Link>
            <a
                href={`https://www.google.com/search?q=${lat},${long}`}
                target="_blank"
            >
                Search
            </a>
        </section>
    );
}

export default PointActions;
