import { create } from 'zustand';

import profile from '../assets/profile.webp';
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
        photo: seed[0].profile.photo || profile,
        registered: seed[0].profile.registered || new Date(),
        username: seed[0].profile.username || '',
    },
    records: {
        experience: seed[0].records.experience,
        notifications: seed[0].records.notifications || [],
        pins: seed[0].records.pins || {},
    },
    settings: {
        map: seed[0].settings.map,
        sync: seed[0].settings.sync || new Date(),
        theme: seed[0].settings.theme,
        units: seed[0].settings.units,
    },
    tracks: null,
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    changePage: page => set(() => ({ page })),
    toggleAuthenticated: () => set(s => ({ authenticated: !(s.authenticated) })),
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
    togglePower: () => set(s => ({ power: !(s.power) })),
    toggleTheme: theme => set(s => toggleThemeAction(s, theme)),
}));

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

export default useZustand;
