import React from 'react';

import useZustand from '../../hooks/useZustand';

import NavbarLogo from '../elements/NavbarLogo';
import NavbarPages from '../elements/NavbarPages';
import NavbarProfile from '../elements/NavbarProfile';

import '../../styles/modules/Navbar.scss';

function Navbar(): React.ReactElement {
    const navbar = useZustand(s => s.navbar);

    return (
        <>
            <div className={navbar ? 'navbar__gutter' : 'navbar__gutter--closed'}></div>
            <nav className={navbar ? 'navbar' : 'navbar--closed'}>
                <NavbarLogo />
                <NavbarProfile />
                <NavbarPages />
            </nav>
        </>
    );
}

export default Navbar;
