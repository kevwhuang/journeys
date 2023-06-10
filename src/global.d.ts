interface Actions {
    changeGallery: (gallery: string) => void,
    changePage: (page: Page) => void,
    deleteNotification: (index: number) => void,
    toggleAuthenticated: () => void,
    toggleFocus: () => void,
    toggleModalNotifications: () => void,
    toggleNavbar: () => void,
    togglePower: () => void,
    toggleTheme: (theme: number) => void,
}

interface Config {
    refreshInterval: number,
}

interface State {
    authenticated: boolean,
    focus: boolean,
    gallery: string,
    modals: Modals,
    navbar: boolean,
    page: Page,
    power: boolean,
    profile: UserProfile,
    records: UserRecords,
    settings: UserSettings,
    signal: Signal,
    speech: boolean,
    tracks: unknown,
}

interface UserProfile {
    bio: string,
    country: string,
    email: string,
    first: string,
    last: string,
    page: string,
    photo: string,
    registered: Date,
    username: string,
}

interface UserRecords {
    experience: number,
    notifications: Notification_[],
    pins: Pin[],
}

interface UserSettings {
    map: number,
    sync: Date,
    theme: number,
    units: number,
}

type Modals = {
    collage: boolean,
    notifications: boolean,
};

type Notification_ = {
    message: string,
    priority: number,
    subject: string,
};

type Page = '' | 'about' | 'account' | 'contact' | 'guide' | 'home'
    | 'map' | 'pins' | 'privacy' | 'rankings' | 'terms';

type Pin = {
    lat: number,
    long: number,
};

type Signal = 0 | 1 | 2 | 3;
