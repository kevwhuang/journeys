import React from 'react';
import axios from 'axios';

import CircularProgress from '@mui/material/CircularProgress';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointMap(props: Props): React.ReactElement {
    const [map, pins] = useZustand(s => [s.system.map, s.pins]);
    const [src, setSrc] = React.useState('');
    const { lat, long } = pins?.[props.id - 1];

    const CENTER = `&center=${lat},${long}`;
    const FORMAT = '&format=png';
    const MARKERS = `&markers=color:0xd3382f|size:mid|${lat},${long}`;
    const SCALE = '&scale=2';
    const SIZE = '&size=500x500';
    const ZOOM = '&zoom=14';
    let MAPTYPE = '&maptype=';

    switch (map) {
        case 0:
            MAPTYPE += 'roadmap';
            break;
        case 1:
            MAPTYPE += 'satellite';
            break;
        case 2:
            MAPTYPE += 'hybrid';
    }

    const endpoint = `${CENTER}${FORMAT}${MAPTYPE}${MARKERS}${SCALE}${SIZE}${ZOOM}`;

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/gmpStaticMap',
                {
                    headers: {
                        'x-endpoint': endpoint,
                    },
                })
                .catch(err => console.log(err));

            res && setSrc(`data:image/png;base64,${res.data}`);
        }());
    }, [endpoint]);

    return (
        <section className="point__map">
            {!src
                ? <div className="point__map--spinner">
                    <CircularProgress size={'121.5px'} />
                </div>
                : <img
                    src={src}
                    alt="Static Map"
                    draggable="false"
                />
            }
        </section>
    );
}

export default PointMap;
