import React from 'react';

import useZustand from '../../hooks/useZustand';

import focusIcon from '../../assets/focus.png';
import night from '../../features/night';

function ViewMap() {
    const ref: React.MutableRefObject<any> = React.useRef();
    const [focus, map, position, power, theme, tracks]
        = useZustand(s => [s.focus, s.system.map, s.position, s.power, s.system.theme, s.tracks]);
    const [heatmap, setHeatmap]: any = React.useState(null);
    const [heatmapPoints, setHeatmapPoints]: any = React.useState([]);
    const [marker, setMarker]: any = React.useState(null);
    const [world, setWorld]: any = React.useState(null);

    React.useEffect(() => {
        (async function createWorld() {
            const { Map }: any = await google.maps.importLibrary('maps');
            let mapType = 'roadmap';

            switch (map) {
                case 1:
                    mapType = 'satellite';
                    break;
                case 2:
                    mapType = 'hybrid';
            }

            setWorld(new Map(ref.current, {
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
                mapId: 'world',
                mapTypeControl: true,
                mapTypeControlOptions: {
                    mapTypeIds: ['hybrid', 'roadmap', 'satellite'],
                    position: google.maps.ControlPosition.RIGHT_TOP,
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                },
                mapTypeId: mapType,
                maxZoom: 16,
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
                styles: (!map && theme) ? night : null,
                tilt: null,
                zoom: 16,
                zoomControl: false,
                zoomControlOptions: null,
            }));
        }());
    }, []);

    React.useEffect(() => {
        (async function createHeatmap() {
            const points = [];
            const { HeatmapLayer }: any = await google.maps.importLibrary('visualization');

            if (tracks.size) {
                for (const track of [...tracks]) {
                    const lat = track.slice(0, track.indexOf(','));
                    const long = track.slice(track.indexOf(',') + 1);

                    points.push(new google.maps.LatLng(lat, long));
                }
            }

            setHeatmap(new HeatmapLayer({
                data: points,
                dissipating: true,
                gradient: [
                    'rgba(0, 0, 0, 0.7)',
                    'rgba(0, 0, 0, 0)',
                ],
                map: world,
                maxIntensity: 1,
                opacity: 1,
                radius: 25,
            }));

            setHeatmapPoints(points);
        }());
    }, [world]);

    React.useEffect(() => {
        (async function createMarker() {
            const { Marker }: any = await google.maps.importLibrary('marker');

            setMarker(new Marker({
                anchorPoint: null,
                animation: null,
                clickable: false,
                collisionBehavior: google.maps.CollisionBehavior.REQUIRED,
                crossOnDrag: false,
                cursor: 'crosshair',
                draggable: false,
                icon: focusIcon,
                label: null,
                map: world,
                opacity: 1,
                optimized: true,
                position: {
                    lat: position.lat,
                    lng: position.long,
                },
                shape: null,
                title: 'current position',
                visible: true,
                zIndex: 0,
            }));
        }());
    }, [world]);

    React.useEffect(() => {
        marker && marker.setPosition(new google.maps.LatLng(position.lat, position.long));
    }, [marker, position]);

    React.useEffect(() => {
        focus && world && world.setCenter(new google.maps.LatLng(position.lat, position.long));
    }, [position, world]);

    React.useEffect(() => {
        if (power && heatmap && tracks.size) {
            const coordinates = [...tracks][0];
            const lat = coordinates.slice(0, coordinates.indexOf(','));
            const long = coordinates.slice(coordinates.indexOf(',') + 1);
            const points = [...heatmapPoints, new google.maps.LatLng(lat, long)];

            setHeatmapPoints(points);
            heatmap.setData(points);
        }
    }, [heatmap, tracks]);

    return <section className="view__map" ref={ref} />;
}

export default ViewMap;
