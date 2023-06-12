'use strict';

function addNotificationAction(s: State, notification: Notification_): Partial<State> {
    const previous: Notification_[] = [...s.records.notifications];

    if (previous.length === 20) previous.pop();

    const notifications: Notification_[] = [notification].concat(previous);

    return ({ records: { ...s.records, notifications } });
}

function addPinAction(s: State, pin: Position): Partial<State> {
    const previous: Position[] = [...s.records.pins];
    const pins: Position[] = [pin].concat(previous);

    return ({ records: { ...s.records, pins } });
}

function deleteNotificationAction(s: State, index: number): Partial<State> {
    const notifications: Notification_[]
        = [...s.records.notifications].filter((e: Notification_, i: number): boolean => i !== index);

    return ({ records: { ...s.records, notifications } });
}

function toggleModalNotificationsAction(s: State): Partial<State> {
    return ({ modals: { ...s.modals, notifications: !(s.modals.notifications) } });
}

function toggleThemeAction(s: State, theme: number): Partial<State> {
    if (!theme) {
        const link: HTMLLinkElement = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = '/media/light.css';
        document.head.appendChild(link);
    } else {
        const x: null | Element = document.head.querySelector('[href="/media/light.css"]');

        x && x.remove();
    }

    return ({ settings: { ...s.settings, theme } });
}

function updateTracksAction(s: State, point: string): Partial<State> {
    const tracks: Set<string> = new Set([point, ...s.tracks]);

    localStorage.setItem('tracks', JSON.stringify([...tracks]));
    return ({ tracks });
}

export default {
    addNotificationAction,
    addPinAction,
    deleteNotificationAction,
    toggleModalNotificationsAction,
    toggleThemeAction,
    updateTracksAction
};
