class _Notification {
    constructor(subject: string, message: string, priority?: 0 | 1 | 2) {
        this.message = message;
        this.priority = priority || 0;
        this.subject = subject;
    }

    message: string;
    priority: 0 | 1 | 2;
    subject: string;
}

class _Pin {
    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
    }

    lat: number;
    long: number;
}

export {
    _Notification,
    _Pin,
};
