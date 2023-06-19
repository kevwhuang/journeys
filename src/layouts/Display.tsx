import React from 'react';
import { Outlet } from 'react-router-dom';

import useZustand from '../hooks/useZustand';

import Controls from '../components/modules/Controls';
import Initialize from '../components/Initialize';
import Navbar from '../components/modules/Navbar';
import Sync from '../components/Sync';

let initialized = false;

function Display(): React.ReactElement {
    const theme = useZustand(s => s.system.theme);

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
            <Initialize />
            <Sync />
        </div>
    );
}

export default Display;
