import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import MuiTooltip from '../libraries/MuiTooltip';

function FooterSocials(): React.ReactElement {
    return (
        <section className="footer__socials">
            <MuiTooltip title="Instagram" offset="-15px">
                <a href="https://www.instagram.com/aephonics" target="_blank">
                    <InstagramIcon />
                </a>
            </MuiTooltip>
            <MuiTooltip title="GitHub" offset="-15px">
                <a href="https://github.com/kevwhuang" target="_blank">
                    <GitHubIcon />
                </a>
            </MuiTooltip>
        </section>
    );
}

export default FooterSocials;
