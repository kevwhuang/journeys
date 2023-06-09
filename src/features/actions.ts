function deleteNotificationAction(s: State, index: number): Partial<State> {
    const notifications: Notification_[]
        // @ts-ignore
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

export default {
    deleteNotificationAction,
    toggleModalNotificationsAction,
    toggleThemeAction,
};
