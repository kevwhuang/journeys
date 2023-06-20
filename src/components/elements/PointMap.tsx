import React from 'react';
import axios from 'axios';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointMap(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const [source, setSource] = React.useState('');
    const { lat, long } = pins?.[props.id - 1];

    const CENTER = `&center=${lat},${long}`;
    const FORMAT = '&format=png';
    const MAPTYPE = '&maptype=hybrid';
    const MARKERS = `&markers=size:mid|color:red|${lat},${long}`;
    const SCALE = '&scale=1';
    const SIZE = '&size=500x500';
    const ZOOM = '&zoom=13';

    const endpoint = `${CENTER}${FORMAT}${MAPTYPE}${MARKERS}${SCALE}${SIZE}${ZOOM}`;

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/gmpStaticMap', {
                headers: {
                    'x-endpoint': endpoint,
                },
            });

            setSource(`data:image/png;base64,${res.data}`);
        }());
    }, [endpoint]);

    return (
        <section className="point__map">
            <img
                src={source}
                alt=" "
                draggable="false"
            />
        </section>
    );
}

export default PointMap;
