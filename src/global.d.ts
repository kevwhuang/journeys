interface Actions {
    addNotification: (notification: Notification_) => void,
    addPin: (pin: Position) => void,
    changeGallery: (gallery: string) => void,
    changePage: (page: Page) => void,
    deleteNotification: (index: number) => void,
    toggleAuthenticated: () => void,
    toggleFocus: () => void,
    toggleModalNotifications: () => void,
    toggleNavbar: () => void,
    togglePower: () => void,
    toggleTheme: (theme: number) => void,
    updatePosition: (lat: number, long: number) => void,
    updateSignal: (strength: Signal) => void,
    updateTracks: (point: string) => void,
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
    position: Position,
    power: boolean,
    profile: UserProfile,
    records: UserRecords,
    settings: UserSettings,
    signal: Signal,
    speech: boolean,
    tracks: Set,
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
    pins: Position[],
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

type Position = {
    lat: number,
    long: number,
};

type Signal = 0 | 1 | 2 | 3;
