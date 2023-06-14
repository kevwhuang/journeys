'use strict';

function addNotification(s: State, notification: Notification__): Partial<State> {
    const previous: Notification__[] = [...s.records.notifications];

    previous.length === 20 && previous.pop();

    const notifications: Notification__[] = [notification].concat(previous);

    return ({ records: { ...s.records, notifications } });
}

function addPin(s: State, pin: Position__): Partial<State> {
    const previous: Position__[] = [...s.pins];
    const pins: Position__[] = [pin].concat(previous);

    localStorage.setItem('pins', JSON.stringify(pins));
    return ({ pins });
}

function deleteNotification(s: State, index: number): Partial<State> {
    const notifications: Notification__[]
        = [...s.records.notifications].filter((e: Notification__, i: number): boolean => i !== index);

    return ({ records: { ...s.records, notifications } });
}

function deletePin(s: State, index: number): Partial<State> {
    const pins: Position__[]
        = [...s.pins].filter((e: Position__, i: number): boolean => i !== index);

    localStorage.setItem('pins', JSON.stringify(pins));
    return ({ pins });
}

function toggleModalNotifications(s: State): Partial<State> {
    return ({ modals: { ...s.modals, notifications: !(s.modals.notifications) } });
}

function toggleTheme(s: State, theme: number): Partial<State> {
    if (!theme) {
        const link: HTMLLinkElement = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = '/media/light.css';
        document.head.appendChild(link);
    } else {
        const x: null | Element = document.head.querySelector('[href="/media/light.css"]');

        x && x.remove();
    }

    return ({ system: { ...s.system, theme } });
}

function updateTracks(s: State, point: string): Partial<State> {
    const tracks: Set<string> = new Set([point, ...s.tracks]);

    localStorage.setItem('tracks', JSON.stringify([...tracks]));
    return ({ tracks });
}

export default {
    addNotification,
    addPin,
    deleteNotification,
    deletePin,
    toggleModalNotifications,
    toggleTheme,
    updateTracks,
};
