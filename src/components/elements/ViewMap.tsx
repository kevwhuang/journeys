import React from 'react';

import useZustand from '../../hooks/useZustand';

import night from '../../features/night';

function ViewMap() {
    const ref: React.MutableRefObject<any> = React.useRef();
    const [map, position, theme] = useZustand(s => [s.system.map, s.position, s.system.theme]);

    React.useEffect(() => {
        new google.maps.Map(ref.current, {
            backgroundColor: theme ? '#1b2635' : '#f3f4f5',
            center: {
                lat: position.lat,
                lng: position.long,
            },
            clickableIcons: false,
            controlSize: 36,
            disableDefaultUI: false,
            disableDoubleClickZoom: false,
            draggableCursor: null,
            draggingCursor: null,
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP,
            },
            gestureHandling: 'greedy',
            heading: null,
            isFractionalZoomEnabled: true,
            keyboardShortcuts: false,
            mapId: null,
            mapTypeControl: true,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid'],
                position: google.maps.ControlPosition.RIGHT_TOP,
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            mapTypeId: !map ? 'roadmap' : map === 1 ? 'satellite' : 'hybrid',
            maxZoom: 20,
            minZoom: 3,
            noClear: false,
            panControl: false,
            panControlOptions: null,
            restriction: null,
            rotateControl: true,
            rotateControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
            scaleControl: true,
            scaleControlOptions: null,
            scrollwheel: true,
            streetView: null,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
            styles: (map !== 2 && theme) ? night : null,
            tilt: null,
            zoom: 15,
            zoomControl: false,
            zoomControlOptions: null,
        });
    }, []);

    return <section className="view__map" ref={ref} />;
}

export default ViewMap;
