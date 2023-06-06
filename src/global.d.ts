interface Actions {
    changePage: (page: Page) => void,
    toggleNavbar: () => void,
    toggleTheme: (theme: number) => void,
    togglePower: () => void,
    toggleAuthenticated: () => void,
}

interface Config {
    refreshInterval: number,
}

interface State {
    authenticated: boolean,
    navbar: boolean,
    page: Page,
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
    notifications: Notifications[],
    pins: Pins[],
}

interface UserSettings {
    map: number,
    sync: Date,
    theme: number,
    units: number,
}

type Notifications = {
    message: string,
    priority: number,
    subject: string,
};

type Page = '' | 'about' | 'contact' | 'guide' | 'home' | 'map'
    | 'pins' | 'privacy' | 'profile' | 'rankings' | 'terms';

type Pins = {
    lat: number,
    long: number,
};
