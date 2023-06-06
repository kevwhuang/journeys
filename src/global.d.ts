interface Actions {
    changePage: (page: Page) => void,
    deleteNotification: (index: number) => void,
    toggleAuthenticated: () => void,
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
    modals: Modals,
    navbar: boolean,
    page: Page_,
    power: boolean,
    profile: UserProfile,
    records: UserRecords,
    settings: UserSettings,
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
    pins: Pin_[],
}

interface UserSettings {
    map: number,
    sync: Date,
    theme: number,
    units: number,
}

type Modals = {
    gallery: boolean,
    notifications: boolean,
};

type Notification_ = {
    message: string,
    priority: number,
    subject: string,
};

type Page_ = '' | 'about' | 'contact' | 'guide' | 'home' | 'map'
    | 'pins' | 'privacy' | 'profile' | 'rankings' | 'terms';

type Pin_ = {
    lat: number,
    long: number,
};
