import React from 'react';

import ControlsNavbar from '../elements/ControlsNavbar';
import ControlsSearch from '../elements/ControlsSearch';
import ControlsSystem from '../elements/ControlsSystem';
import ControlsUser from '../elements/ControlsUser';

import '../../styles/modules/Controls.scss';

function Controls(): React.ReactElement {
    return (
        <aside className="controls">
            <div className="controls--container">
                <ControlsNavbar />
                <ControlsUser />
                <ControlsSearch />
                <ControlsSystem />
            </div>
        </aside>
    );
}

export default Controls;
