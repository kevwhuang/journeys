'use strict';

export class __Notification {
    constructor(subject: string, message: string, priority?: 0 | 1 | 2) {
        this.message = message;
        this.priority = priority || 0;
        this.subject = subject;
    }

    message: string;
    priority: 0 | 1 | 2;
    subject: string;
}

export class __Position {
    constructor(lat: number, long: number, address: string, time: string) {
        this.lat = lat;
        this.long = long;
        this.address = address;
        this.time = time;
    }

    lat: number;
    long: number;
    address: string;
    time: string;
}
