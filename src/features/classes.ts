class Notification_ {
    constructor(subject: string, message: string, priority?: 0 | 1 | 2) {
        this.message = message;
        this.priority = priority || 0;
        this.subject = subject;
    }

    message: string;
    priority: 0 | 1 | 2;
    subject: string;
}

class Pin {
    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
    }

    lat: number;
    long: number;
}

export {
    Notification_,
    Pin,
};
