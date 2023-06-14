interface Actions {
    addNotification: (notification: Notification_) => void,
    addPin: (pin: Position) => void,
    changeGallery: (gallery: string) => void,
    changePage: (page: Page) => void,
    deleteNotification: (index: number) => void,
    deletePin: (index: number) => void,
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
    pins: Position__[],
    position: Position,
    power: boolean,
    records: Records,
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
    sync: Date,
    theme: number,
    units: number,
};

type User = {
    bio: string,
    country: string,
    email: string,
    first: string,
    id: number,
    last: string,
    page: string,
    photo: string,
    registered: Date,
    username: string,
};
