import React from 'react';
import { Link } from 'react-router-dom';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

import useZustand from '../../hooks/useZustand';

interface Props {
    counter?: number,
    icon: React.ReactElement,
    label: string,
    to: string,
}

function Item(props: Props): React.ReactElement {
    const page = useZustand(s => s.page);
    const { counter, icon, label, to } = props;

    function setClass() {
        try {
            return label === `${page[0].toUpperCase()}${page.slice(1)}` ? 'active' : '';
        } catch {
            return '';
        }
    }

    return (
        <li className={setClass()}>
            <Link to={to}>
                <span>
                    {icon}
                    {label}
                </span>
                {counter && <span>{counter}</span>}
            </Link>
        </li>
    );
}

function NavbarPages(): React.ReactElement {
    const pins = useZustand(s => s.records.pins);

    return (
        <section className="navbar__pages">
            <ul>
                <Item
                    icon={<HomeOutlinedIcon />}
                    label="Home"
                    to="/"
                />
                <Item
                    icon={<MapOutlinedIcon />}
                    label="Map"
                    to="map"
                />
                <Item
                    counter={pins.length}
                    icon={<PinDropOutlinedIcon />}
                    label="Pins"
                    to="pins"
                />
                <Item
                    icon={<LeaderboardOutlinedIcon />}
                    label="Rankings"
                    to="rankings"
                />
                <Item
                    icon={<AccountBoxOutlinedIcon />}
                    label="Profile"
                    to="profile"
                />
            </ul>
            <ul>
                <Item
                    icon={<DescriptionOutlinedIcon />}
                    label="Guide"
                    to="guide"
                />
                <Item
                    icon={<InfoOutlinedIcon />}
                    label="About"
                    to="about"
                />
                <Item
                    icon={<EmailOutlinedIcon />}
                    label="Contact"
                    to="contact"
                />
            </ul>
        </section>
    );
}

export default NavbarPages;
