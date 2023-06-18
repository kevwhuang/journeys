'use strict';

import { create } from 'zustand';

import actions from '../features/actions';
import defaultPhoto from '../assets/default-photo.webp';
import initializers from '../features/initializers';
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
        lat: initializers.position().lat,
        long: initializers.position().long,
    },
    power: true,
    records: {
        experience: seed[0].records.experience || 0,
        notifications: initializers.notifications(seed[0].records.notifications) || [],
    },
    refresh: 0,
    search: '',
    signal: 0,
    system: {
        map: seed[0].system.map || 2,
        theme: seed[0].system.theme || 1,
        units: seed[0].system.units || 1,
    },
    tracks: initializers.tracks(),
    user: {
        first: seed[0].user.first || '',
        last: seed[0].user.last || '',
        photo: seed[0].user.photo || defaultPhoto,
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
    toggleRefresh: () => set(s => ({ refresh: s.refresh + 1 })),
    toggleTheme: theme => set(s => actions.toggleTheme(s, theme)),
    updateExperience: () => set(s => ({ records: { ...s.records, experience: (s.records.experience + 100) } })),
    updatePosition: (lat, long) => set(() => ({ position: { lat, long } })),
    updateSearch: query => set(() => ({ search: query })),
    updateSignal: strength => set(() => ({ signal: strength })),
    updateTracks: point => set(s => actions.updateTracks(s, point)),
}));

export default useZustand;
