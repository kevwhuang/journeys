import React from 'react';

import FooterLegal from '../elements/FooterLegal';
import FooterLogo from '../elements/FooterLogo';
import FooterPages from '../elements/FooterPages';
import FooterSocials from '../elements/FooterSocials';

import '../../styles/modules/Footer.scss';

function Footer(): React.ReactElement {
    return (
        <footer className="footer">
            <FooterLogo />
            <FooterPages />
            <div className="footer--divider-1" />
            <div className="footer--divider-2" />
            <FooterSocials />
            <FooterLegal />
        </footer>
    );
}

export default Footer;
