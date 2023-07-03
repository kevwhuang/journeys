import React from 'react';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';

import useZustand from '../../hooks/useZustand';

import NavbarPagesItem from './NavbarPagesItem';

function NavbarPages(): React.ReactElement {
    const pins = useZustand(s => s.pins);

    return (
        <section className="navbar__pages">
            <ul>
                <NavbarPagesItem
                    icon={<HomeOutlinedIcon />}
                    to="/"
                    label="Home"
                />
                <NavbarPagesItem
                    icon={<MapOutlinedIcon />}
                    to="map"
                    label="Map"
                />
                <NavbarPagesItem
                    icon={<PinDropOutlinedIcon />}
                    to="pins"
                    label="Pins"
                    counter={pins.length}
                />
                <NavbarPagesItem
                    icon={<LeaderboardOutlinedIcon />}
                    to="rankings"
                    label="Rankings"
                />
                <NavbarPagesItem
                    icon={<AccountBoxOutlinedIcon />}
                    to="account"
                    label="Account"
                />
            </ul>
            <ul>
                <NavbarPagesItem
                    icon={<ArticleOutlinedIcon />}
                    to="guide"
                    label="Guide"
                />
                <NavbarPagesItem
                    icon={<InfoOutlinedIcon />}
                    to="about"
                    label="About"
                />
                <NavbarPagesItem
                    icon={<EmailOutlinedIcon />}
                    to="contact"
                    label="Contact"
                />
                <NavbarPagesItem
                    icon={<GavelOutlinedIcon />}
                    to="terms"
                    label="Terms"
                />
                <NavbarPagesItem
                    icon={<PrivacyTipOutlinedIcon />}
                    to="privacy"
                    label="Privacy"
                />
            </ul>
        </section>
    );
}

export default NavbarPages;
