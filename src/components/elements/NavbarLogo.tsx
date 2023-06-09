import React from 'react';

import logo from '../../assets/logo.png';

function NavbarLogo(): React.ReactElement {
    return (
        <section className="navbar__logo">
            <img src={logo} alt="Logo" draggable="false" />
            <span>Journeys</span>
        </section>
    );
}

export default NavbarLogo;
