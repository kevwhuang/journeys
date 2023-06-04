import React from 'react';

import useStore from '../../hooks/useZustand';

import NavbarLogo from '../elements/NavbarLogo';
import NavbarPages from '../elements/NavbarPages';
import NavbarProfile from '../elements/NavbarProfile';

import '../../styles/modules/Navbar.scss';

function Navbar(): React.ReactElement {
    const navbar = useStore(s => s.navbar);

    return (
        <nav className={navbar ? 'navbar' : 'navbar--closed'}>
            <NavbarLogo />
            <NavbarProfile />
            <NavbarPages />
        </nav>
    );
}

export default Navbar;
