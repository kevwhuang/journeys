import React from 'react';

import logo from '../../assets/logo.png';

function FooterLogo(): React.ReactElement {
    return (
        <section className="footer__logo">
            <img src={logo} alt="Logo" draggable="false" />
            <span>Journeys</span>
        </section>
    );
}

export default FooterLogo;
