import React from 'react';
import { Outlet } from 'react-router-dom';

import useZustand from '../hooks/useZustand';

import Controls from '../components/modules/Controls';
import Gallery from '../components/modals/Gallery';
import Initialize from '../components/Initialize';
import Navbar from '../components/modules/Navbar';
import Notifications from '../components/modals/Notifications';
import Sync from '../components/Sync';

import '../styles/modals/Notifications.scss';

let initialized = false;

function Display(): React.ReactElement {
    const [navbar, theme, toggleNavbar]
        = useZustand(s => [s.navbar, s.system.theme, s.toggleNavbar]);

    if (!initialized) {
        if (!theme) {
            const link: HTMLLinkElement = document.createElement('link');

            link.rel = 'stylesheet';
            link.href = '/media/light.css';
            document.head.appendChild(link);
        }

        initialized = true;
    }

    return (
        <div id="display">
            <Controls />
            <Navbar />
            <Outlet />
            <Gallery />
            <Notifications />
            <Initialize />
            <Sync />
            <div
                className={navbar ? 'display__zone' : 'display__zone--closed'}
                onClick={() => toggleNavbar()}
            />
        </div>
    );
}

export default Display;
