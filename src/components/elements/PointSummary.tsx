import React from 'react';
import axios from 'axios';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointSummary(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const [address, setAddress] = React.useState('');
    const { lat, long } = pins?.[props.id - 1];

    React.useEffect(() => {
        (async function get() {
            const res = await axios('/.netlify/functions/gmpReverseGeocoding',
                {
                    headers: {
                        'x-coordinates': `latlng=${lat},${long}`,
                    },
                })
                .catch(err => console.log(err));

            res && setAddress(res.data);
        }());
    }, [lat, long]);

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
