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
            <FooterSocials />
            <FooterLegal />
        </footer>
    );
}

export default Footer;
