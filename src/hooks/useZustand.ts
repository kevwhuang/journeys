import { create } from 'zustand';

import actions from '../features/actions';
import {
    _Notification,
    _Pin,
} from '../features/classes';

import profile from '../assets/profile.webp';
import seed from '../data/seed.json';

const initialize: State = {
    authenticated: true,
    focus: true,
    gallery: '',
    modals: {
        collage: false,
        notifications: false,
    },
    navbar: false,
    page: 'home',
    power: true,
    profile: {
        bio: seed[0].profile.bio || '',
        country: seed[0].profile.country || 'US',
        email: seed[0].profile.email || '',
        first: seed[0].profile.first || '',
        last: seed[0].profile.last || '',
        page: seed[0].profile.page || '',
        photo: seed[0].profile.photo || profile,
        registered: seed[0].profile.registered || new Date(),
        username: seed[0].profile.username || '',
    },
    records: {
        experience: seed[0].records.experience,
        notifications: seed[0].records.notifications || [new _Notification('Subject', 'Message')],
        pins: seed[0].records.pins || [new _Pin(0, 0)],
    },
    settings: {
        map: seed[0].settings.map,
        sync: seed[0].settings.sync || new Date(),
        theme: seed[0].settings.theme,
        units: seed[0].settings.units,
    },
    signal: 3,
    speech: true,
    tracks: null,
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    addNotification: notification => set(s => actions.addNotificationAction(s, notification)),
    changeGallery: gallery => set(() => ({ gallery })),
    changePage: page => set(() => ({ page })),
    deleteNotification: index => set(s => actions.deleteNotificationAction(s, index)),
    toggleAuthenticated: () => set(s => ({ authenticated: !(s.authenticated) })),
    toggleFocus: () => set(s => ({ focus: !(s.focus) })),
    toggleModalNotifications: () => set(s => actions.toggleModalNotificationsAction(s)),
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
    togglePower: () => set(s => ({ power: !(s.power) })),
    toggleTheme: theme => set(s => actions.toggleThemeAction(s, theme)),
}));

export default useZustand;
