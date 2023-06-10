addEventListener('keyup', (e: KeyboardEvent): void => {
    if (!e.isTrusted || !e.ctrlKey) return;

    const navigation: string[] = [
        'privacy',
        'home',
        'map',
        'pins',
        'rankings',
        'profile',
        'guide',
        'about',
        'contact',
        'terms',
    ];

    const target: undefined | string = navigation[Number(e.key)];

    if (target) {
        const link: null | HTMLElement
            = document.querySelector(`a[href="/${target === 'home' ? '' : target}"]`);

        link && link.click();
    }
});
