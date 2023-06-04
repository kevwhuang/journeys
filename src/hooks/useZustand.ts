import { create } from 'zustand';

const initialize: State = {
    authenticated: false,
    flag: 'US',
    navbar: false,
    notifications: 0,
    page: 'pins',
    power: false,
    theme: 'dark',
};

const useZustand = create<Actions & State>(set => ({
    ...initialize,
    toggleNavbar: () => set(s => ({ navbar: !(s.navbar) })),
}));

export default useZustand;
