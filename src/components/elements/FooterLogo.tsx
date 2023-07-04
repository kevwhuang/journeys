import React from 'react';

import logo from '../../assets/logo.png';

function FooterLogo(): React.ReactElement {
    function handleClick() {
        alert('Version: 1.0.0\nDate: July 4, 2023');
    }

    return (
        <section className="footer__logo">
            <img
                src={logo}
                alt="Logo"
                draggable="false"
            />
            <span onClick={handleClick}>Journeys</span>
        </section>
    );
}

export default FooterLogo;
