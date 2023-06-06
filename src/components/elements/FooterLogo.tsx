import React from 'react';

import logo from '../../assets/logo-512x512.png';

function FooterLogo(): React.ReactElement {
    return (
        <section className="footer__logo">
            <img src={logo} alt="Logo" draggable="false" />
            <span>Journeys</span>
        </section>
    );
}

export default FooterLogo;
