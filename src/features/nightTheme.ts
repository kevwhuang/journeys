'use strict';

interface NightTheme {
    elementType: string,
    featureType?: string,
    stylers: [{ color: string }],
}

const nightTheme: NightTheme[] = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#242f3e' }],
    }, {
        elementType: 'geometry',
        featureType: 'poi.park',
        stylers: [{ color: '#263c3f' }],
    }, {
        elementType: 'geometry',
        featureType: 'road',
        stylers: [{ color: '#38414e' }],
    }, {
        elementType: 'geometry',
        featureType: 'road.highway',
        stylers: [{ color: '#746855' }],
    }, {
        elementType: 'geometry',
        featureType: 'transit',
        stylers: [{ color: '#2f3948' }],
    }, {
        elementType: 'geometry',
        featureType: 'water',
        stylers: [{ color: '#17263c' }],
    }, {
        elementType: 'geometry.stroke',
        featureType: 'road',
        stylers: [{ color: '#212a37' }],
    }, {
        elementType: 'geometry.stroke',
        featureType: 'road.highway',
        stylers: [{ color: '#1f2835' }],
    }, {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'administrative.locality',
        stylers: [{ color: '#d59563' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'poi',
        stylers: [{ color: '#d59563' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'poi.park',
        stylers: [{ color: '#6b9a76' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'road',
        stylers: [{ color: '#9ca5b3' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'road.highway',
        stylers: [{ color: '#f3d19c' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'transit.station',
        stylers: [{ color: '#d59563' }],
    }, {
        elementType: 'labels.text.fill',
        featureType: 'water',
        stylers: [{ color: '#515c6d' }],
    }, {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }],
    }, {
        elementType: 'labels.text.stroke',
        featureType: 'water',
        stylers: [{ color: '#17263c' }],
    },
];

export default nightTheme;
