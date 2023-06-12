import { create } from 'zustand';

import actions from '../features/actions';
import {
    _Notification,
    _Pin,
} from '../features/classes';

import profile from '../assets/profile.webp';
import seed from '../data/seed.json';

const initialize: State = {
    authenticated: false,
    focus: false,
    gallery: '',
    modals: {
        collage: false,
        notifications: false,
    },
    navbar: false,
    page: 'home',
    position: {
        lat: 0,
        long: 0,
    },
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
        pins: initPins(),
    },
    settings: {
        map: seed[0].settings.map,
        sync: seed[0].settings.sync || new Date(),
        theme: seed[0].settings.theme,
        units: seed[0].settings.units,
    },
    signal: 0,
    speech: true,
    tracks: initTracks(),
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    addNotification: notification => set(s => actions.addNotificationAction(s, notification)),
    addPin: pin => set(s => actions.addPinAction(s, pin)),
    changeGallery: gallery => set(() => ({ gallery })),
    changePage: page => set(() => ({ page })),
    deleteNotification: index => set(s => actions.deleteNotificationAction(s, index)),
    toggleAuthenticated: () => set(s => ({ authenticated: !(s.authenticated) })),
    toggleFocus: () => set(s => ({ focus: !(s.focus) })),
    toggleModalNotifications: () => set(s => actions.toggleModalNotificationsAction(s)),
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
    togglePower: () => set(s => ({ power: !(s.power) })),
    toggleTheme: theme => set(s => actions.toggleThemeAction(s, theme)),
    updatePosition: (lat, long) => set(() => ({ position: { lat, long } })),
    updateSignal: strength => set(() => ({ signal: strength })),
    updateTracks: point => set(s => actions.updateTracksAction(s, point)),
}));

function initPins(): Position[] {
    const pins: null | string = localStorage.getItem('pins');

    if (pins === null || pins === '{}') return [];
    else return JSON.parse(pins);
}

function initTracks(): Set<string> {
    const tracks: null | string = localStorage.getItem('tracks');

    if (tracks === null || tracks === '{}') return new Set();
    else return new Set(JSON.parse(tracks));
}

export default useZustand;
