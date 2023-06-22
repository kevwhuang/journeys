import React from 'react';

interface Props {
    center: google.maps.LatLngLiteral;
    zoom: number;
}

function ViewMap(props: Props) {
    const ref: React.MutableRefObject<any> = React.useRef();
    const { center, zoom } = props;

    React.useEffect(() => {
        new google.maps.Map(ref.current, {
            center,
            zoom,
        });
    }, []);

    return <section className="view__map" ref={ref} />;
}

export default ViewMap;
