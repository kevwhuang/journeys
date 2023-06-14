'use strict';

import {
    __Notification,
    __Position,
} from './classes';

function notifications(data: any): Notification__[] {
    const notifications: Notification__[] = [];

    for (const e of data) {
        notifications.unshift(new __Notification(e.subject, e.message, e.priority));
    }

    return notifications;
}

function pins(): Position__[] {
    const data: null | string = localStorage.getItem('pins');
    const pins: Position__[] = [];

    if (data === null || data === '{}') return [];

    for (const e of JSON.parse(data)) {
        pins.push(new __Position(e.lat, e.long));
    }

    return pins;
}

function tracks(): Set<string> {
    const data: null | string = localStorage.getItem('tracks');

    if (data === null || data === '{}') return new Set();
    return new Set(JSON.parse(data));
}

export default {
    notifications,
    pins,
    tracks,
};
