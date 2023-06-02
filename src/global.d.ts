interface Actions { }

interface Config { }

interface State {
    status: boolean,
    page: 'home' | 'map' | 'pins' | 'profile' | 'rankings',
    theme: 'dark' | 'light',
}
