'use strict';

interface Actions {
    addNotification: (notification: Notification__) => void,
    addPin: (pin: Pin) => void,
    changeGallery: (gallery: string) => void,
    changePage: (page: Page) => void,
    deleteNotification: (index: number) => void,
    deletePin: (index: number) => void,
    initializeRecords: (records: Records) => void,
    initializeSystem: (system: System) => void,
    initializeUser: (user: User) => void,
    toggleFocus: () => void,
    toggleModalNotifications: () => void,
    toggleNavbar: () => void,
    togglePower: () => void,
    toggleRefresh: () => void,
    toggleTheme: (theme: number) => void,
    updateExperience: () => void,
    updatePosition: (lat: number, long: number) => void,
    updateSearch: (query: string) => void,
    updateSignal: (strength: Signal) => void,
    updateTracks: (point: string) => void,
}

interface State {
    focus: boolean,
    gallery: string,
    modals: Modals,
    navbar: boolean,
    page: Page,
    pins: Pin[],
    position: Position__,
    power: boolean,
    records: Records,
    refresh: number,
    search: string,
    signal: Signal,
    system: System,
    tracks: Set,
    user: User,
}

type Modals = {
    collage: boolean,
    notifications: boolean,
};

type Notification__ = {
    message: string,
    priority: number,
    subject: string,
};

type Page = '' | 'about' | 'account' | 'contact' | 'guide' | 'home'
    | 'map' | 'pins' | 'privacy' | 'rankings' | 'terms';

type Pin = {
    lat: number,
    long: number,
    address: string,
    time: string,
}

type Position__ = {
    lat: number,
    long: number,
};

type Records = {
    experience: number,
    notifications: Notification__[],
};

type Signal = 0 | 1 | 2 | 3;

type System = {
    map: number,
    theme: number,
    units: number,
};

type User = {
    first: string,
    last: string,
    photo: string,
};
