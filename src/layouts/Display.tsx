import React from 'react';
import { Outlet } from 'react-router-dom';

import Controls from '../components/modules/Controls';
import Navbar from '../components/modules/Navbar';

function Display(): React.ReactElement {
    return (
        <div id="display">
            <Controls />
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Display;
