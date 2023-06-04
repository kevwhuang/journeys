interface Actions {
    toggleNavbar: () => void,
}

interface Config {
    refreshInterval: number,
}

interface State {
    authenticated: boolean,
    flag: string,
    navbar: boolean,
    notifications: number,
    page: 'about' | 'contact' | 'guide' | 'home' | 'map' | 'pins' | 'profile' | 'rankings',
    power: boolean,
    theme: 'dark' | 'light',
}
