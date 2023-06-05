import React from 'react';

import logo from '../../assets/logo-512x512.png';

function NavbarLogo(): React.ReactElement {
    return (
        <section className="navbar__logo">
            <img src={logo} alt="Journeys logo." draggable="false" />
            <span>Journeys</span>
        </section>
    );
}

export default NavbarLogo;
