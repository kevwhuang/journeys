'use strict';

import {
    __Notification,
    __Position,
} from './classes';

function notifications(data: any): Notification__[] {
    const notifications: Notification__[] = [];

    for (const e of data) {
        notifications.push(new __Notification(e.subject, e.message, e.priority));
    }

    return notifications;
}

function pins(): Pin[] {
    const data: null | string = localStorage.getItem('pins');
    const pins: Pin[] = [];

    if (data === null || data === '{}') return [];

    for (const e of JSON.parse(data)) {
        pins.push(new __Position(e.lat, e.long, e.time));
    }

    return pins;
}

function position(): { lat: number, long: number } {
    const data: null | string = localStorage.getItem('tracks');

    if (data === null || data === '{}') {
        return {
            lat: 0,
            long: 0,
        };
    }

    const coordinates: string = JSON.parse(data);

    return {
        lat: Number(coordinates.slice(0, coordinates.indexOf(','))),
        long: Number(coordinates.slice(coordinates.indexOf(',') + 1)),
    };
}

function tracks(): Set<string> {
    const data: null | string = localStorage.getItem('tracks');

    if (data === null || data === '{}') return new Set();
    return new Set(JSON.parse(data));
}

export default {
    notifications,
    pins,
    position,
    tracks,
};
