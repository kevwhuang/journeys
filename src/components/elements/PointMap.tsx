import React from 'react';

import useZustand from '../../hooks/useZustand';

interface Props {
    id: number,
}

function PointMap(props: Props): React.ReactElement {
    const pins = useZustand(s => s.pins);
    const { lat, long } = pins?.[props.id - 1];

    const $KEY = `&key=${import.meta.env.VITE_GMP_API_KEY}`;
    // const $SIGNATURE = `&signature=${import.meta.env.VITE_GMP_SECRET}`;
    const $SIGNATURE = '';
    const BASE = 'https://maps.googleapis.com/maps/api/staticmap';
    const CENTER = `&center=${lat},${long}`;
    const FORMAT = '&format=png';
    const MAPTYPE = '&maptype=hybrid';
    const MARKERS = `&markers=size:mid|color:red|${lat},${long}`;
    const SCALE = '&scale=1';
    const SIZE = '&size=500x500';
    const ZOOM = '&zoom=13';

    return (
        <section className="point__map">
            <img
                src={`${BASE}?${$KEY}${$SIGNATURE}${CENTER}${FORMAT}${MAPTYPE}${MARKERS}${SCALE}${SIZE}${ZOOM}`}
                alt={`${lat} | ${long}`}
                draggable="false"
            />
        </section>
    );
}

export default PointMap;
