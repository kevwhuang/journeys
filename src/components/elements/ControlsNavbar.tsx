import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import MuiTooltip from '../libraries/MuiTooltip';

import useZustand from '../../hooks/useZustand';

function ControlsNavbar(): React.ReactElement {
    const [navbar, toggleNavbar] = useZustand(s => [s.navbar, s.toggleNavbar]);

    return (
        <section className="controls__navbar">
            <MuiTooltip title="Toggle navbar" offset="-5px">
                {navbar
                    ? <MenuOpenIcon onClick={() => toggleNavbar()} />
                    : <MenuIcon onClick={() => toggleNavbar()} />
                }
            </MuiTooltip>
        </section>
    );
}

export default ControlsNavbar;
