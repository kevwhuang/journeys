import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterSocials(): React.ReactElement {
    return (
        <section className="footer__socials">
            <a href="https://www.instagram.com/aephonics" target="_blank">
                <InstagramIcon />
            </a>
            <a href="https://github.com/kevwhuang" target="_blank">
                <GitHubIcon />
            </a>
        </section>
    );
}

export default FooterSocials;
