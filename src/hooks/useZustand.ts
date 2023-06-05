import { create } from 'zustand';

import seed from '../data/seed.json';

const initialize: State = {
    authenticated: true,
    navbar: true,
    page: 'home',
    power: false,
    profile: {
        bio: seed[0].profile.bio || '',
        country: seed[0].profile.country || 'US',
        email: seed[0].profile.email || '',
        first: seed[0].profile.first || '',
        last: seed[0].profile.last || '',
        page: seed[0].profile.page || '',
        photo: seed[0].profile.photo || '',
        registered: seed[0].profile.registered || new Date(),
        username: seed[0].profile.username || '',
    },
    records: {
        experience: seed[0].records.experience || 0,
        notifications: seed[0].records.notifications || [],
        pins: seed[0].records.pins || {},
    },
    settings: {
        map: seed[0].settings.map || 2,
        sync: seed[0].settings.sync || new Date(),
        theme: seed[0].settings.theme || 1,
        units: seed[0].settings.units || 1,
    },
    tracks: null,
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    changePage: page => set(() => ({ page })),
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
}));

export default useZustand;
