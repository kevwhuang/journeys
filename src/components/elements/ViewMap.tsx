import React from 'react';

import useZustand from '../../hooks/useZustand';

import focusIcon from '../../assets/focus.png';
import nightTheme from '../../features/nightTheme';

function ViewMap() {
    const ref: React.MutableRefObject<any> = React.useRef();
    const [focus, map, pins, position, power, theme, tracks]
        = useZustand(s => [s.focus, s.system.map, s.pins, s.position, s.power, s.system.theme, s.tracks]);
    const [heatmap, setHeatmap]: any = React.useState(null);
    const [heatmapPoints, setHeatmapPoints]: any = React.useState([]);
    const [marker, setMarker]: any = React.useState(null);
    const [world, setWorld]: any = React.useState(null);

    React.useEffect(() => {
        (async function createWorld() {
            const mobile = navigator.userAgent.search(/Macintosh|Windows NT/) === -1;
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
                mapId: null,
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
                    position: mobile
                        ? google.maps.ControlPosition.LEFT_TOP
                        : google.maps.ControlPosition.RIGHT_BOTTOM,
                },
                scaleControl: true,
                scaleControlOptions: null,
                scrollwheel: true,
                streetView: null,
                streetViewControl: true,
                streetViewControlOptions: {
                    position: mobile
                        ? google.maps.ControlPosition.LEFT_TOP
                        : google.maps.ControlPosition.RIGHT_BOTTOM,
                },
                styles: (!map && theme) ? nightTheme : null,
                tilt: null,
                zoom: 15,
                zoomControl: false,
                zoomControlOptions: null,
            }));
        }());
    }, [map]);

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
                radius: 22.5,
            }));

            setHeatmapPoints(points);
        }());
    }, [world]);

    React.useEffect(() => {
        (async function createPins() {
            for (const pin of pins) {
                new google.maps.Circle({
                    center: {
                        lat: pin.lat,
                        lng: pin.long,
                    },
                    clickable: false,
                    draggable: false,
                    editable: false,
                    fillColor: '#d3382f',
                    fillOpacity: 0.5,
                    map: world,
                    radius: 22,
                    strokeColor: '#d3382f',
                    strokeOpacity: 1,
                    strokePosition: google.maps.StrokePosition.CENTER,
                    strokeWeight: 3,
                    visible: true,
                    zIndex: 0,
                });
            }
        }());
    }, [pins, world]);

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

    world && world.addListener('maptypeid_changed', () => {
        if (world.mapTypeId === 'roadmap' && theme) {
            world.setOptions({ styles: nightTheme });
        } else {
            world.setOptions({ styles: null });
        }
    });

    world && world.addListener('zoom_changed', () => {
        heatmap && heatmap.setOptions({ radius: world.getZoom() * 1.5 });
    });

    return <section className="view__map" ref={ref} />;
}

export default ViewMap;
