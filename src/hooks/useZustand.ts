'use strict';

import { create } from 'zustand';

import actions from '../features/actions';
import defaultPhoto from '../assets/default-photo.webp';
import initializers from '../features/initializers';

const initialize: State = {
    focus: true,
    gallery: '',
    modals: {
        collage: false,
        notifications: false,
    },
    navbar: true,
    page: 'home',
    pins: initializers.pins(),
    position: {
        lat: initializers.position().lat,
        long: initializers.position().long,
    },
    power: true,
    records: {
        experience: 0,
        notifications: [],
    },
    refresh: 0,
    search: '',
    signal: 0,
    system: {
        map: 2,
        theme: 1,
        units: 1,
    },
    tracks: initializers.tracks(),
    user: {
        first: '',
        last: '',
        photo: defaultPhoto,
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
    initializeRecords: records => set(() => ({ records })),
    initializeSystem: system => set(() => ({ system })),
    initializeUser: user => set(() => ({ user })),
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
