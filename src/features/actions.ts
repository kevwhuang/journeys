function deleteNotificationAction(s: State, index: number): Partial<State> {
    // @ts-ignore
    const notifications = [...s.records.notifications].filter((e, i) => i !== index);

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
        const x = document.head.querySelector('[href="/media/light.css"]');

        x && x.remove();
    }

    return ({ settings: { ...s.settings, theme } });
}

export default {
    deleteNotificationAction,
    toggleModalNotificationsAction,
    toggleThemeAction,
};
