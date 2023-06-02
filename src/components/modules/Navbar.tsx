import React from 'react';

import NavbarLogo from '../elements/NavbarLogo';
import NavbarPages from '../elements/NavbarPages';
import NavbarProfile from '../elements/NavbarProfile';

import '../../styles/modules/Navbar.scss';

function Navbar(): React.ReactElement {
    return (
        <nav className="navbar">
            <NavbarLogo />
            <NavbarProfile />
            <NavbarPages />
        </nav>
    );
}

export default Navbar;
