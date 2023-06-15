'use strict';

import { create } from 'zustand';

import actions from '../features/actions';
import initializers from '../features/initializers';
import photo from '../assets/default-photo.webp';
import seed from '../data/seed.json';

const initialize: State = {
    focus: false,
    gallery: '',
    modals: {
        collage: false,
        notifications: false,
    },
    navbar: false,
    page: 'home',
    pins: initializers.pins(),
    position: {
        lat: 0,
        long: 0,
    },
    power: true,
    records: {
        experience: seed[0].records.experience || 0,
        notifications: initializers.notifications(seed[0].records.notifications) || [],
    },
    signal: 0,
    system: {
        map: seed[0].system.map || 2,
        sync: seed[0].system.sync || new Date(),
        theme: seed[0].system.theme || 1,
        units: seed[0].system.units || 1,
    },
    tracks: initializers.tracks(),
    user: {
        bio: seed[0].user.bio || '',
        country: seed[0].user.country || '',
        email: seed[0].user.email || '',
        first: seed[0].user.first || '',
        id: seed[0].user.id || Math.round(Math.random() * 1e7),
        last: seed[0].user.last || '',
        page: seed[0].user.page || '',
        photo: seed[0].user.photo || photo,
        registered: seed[0].user.registered || new Date(),
        username: seed[0].user.username || '',
    },
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    addNotification: notification => set(s => actions.addNotification(s, notification)),
    addPin: pin => set(s => actions.addPin(s, pin)),
    changeGallery: gallery => set(() => ({ gallery })),
    changePage: page => set(() => ({ page })),
    deleteNotification: index => set(s => actions.deleteNotification(s, index)),
    deletePin: index => set(s => actions.deletePin(s, index)),
    toggleFocus: () => set(s => ({ focus: !(s.focus) })),
    toggleModalNotifications: () => set(s => actions.toggleModalNotifications(s)),
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
    togglePower: () => set(s => ({ power: !(s.power) })),
    toggleTheme: theme => set(s => actions.toggleTheme(s, theme)),
    updatePosition: (lat, long) => set(() => ({ position: { lat, long } })),
    updateSignal: strength => set(() => ({ signal: strength })),
    updateTracks: point => set(s => actions.updateTracks(s, point)),
}));

export default useZustand;
