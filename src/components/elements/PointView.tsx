import React from 'react';
import axios from 'axios';

import CircularProgress from '@mui/material/CircularProgress';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointView(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const [src, setSrc] = React.useState('');
    const { lat, long } = pins?.[props.id - 1];

    const ERROR = '&return_error_code=false';
    const FOV = '&fov=120';
    const LOCATION = `&location=${lat},${long}`;
    const SIZE = '&size=500x500';
    const SOURCE = '&source=outdoor';

    const endpoint = `${ERROR}${FOV}${LOCATION}${SIZE}${SOURCE}`;

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/gmpStreetView',
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
        <section className="point__view">
            {!src
                ? <div className="point__view--spinner">
                    <CircularProgress size={'121.5px'} />
                </div>
                : <img
                    src={src}
                    alt="Static Street View"
                    draggable="false"
                />
            }
        </section>
    );
}

export default PointView;
