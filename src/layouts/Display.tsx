import React from 'react';
import { Outlet } from 'react-router-dom';

import useZustand from '../hooks/useZustand';

import Controls from '../components/modules/Controls';
import Navbar from '../components/modules/Navbar';

let initialized = false;

function Display(): React.ReactElement {
    const theme = useZustand(s => s.settings.theme);

    if (!initialized) {
        if (!theme) {
            const link = document.createElement('link');

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
        </div>
    );
}

export default Display;
