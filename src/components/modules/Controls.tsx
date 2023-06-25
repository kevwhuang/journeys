import React from 'react';

import useZustand from '../../hooks/useZustand';

import ControlsMap from '../elements/ControlsMap';
import ControlsNavbar from '../elements/ControlsNavbar';
import ControlsSearch from '../elements/ControlsSearch';
import ControlsSystem from '../elements/ControlsSystem';

import '../../styles/modules/Controls.scss';

function Controls(): React.ReactElement {
    const navbar = useZustand(s => s.navbar);

    return (
        <aside className="controls">
            <div className={navbar ? 'controls--container' : 'controls--container opened'}>
                <ControlsNavbar />
                <ControlsMap />
                <ControlsSearch />
                <ControlsSystem />
            </div>
        </aside>
    );
}

export default Controls;
