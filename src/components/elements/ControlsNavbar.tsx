import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import useZustand from '../../hooks/useZustand';

function ControlsNavbar(): React.ReactElement {
    const [navbar, toggleNavbar] = useZustand(s => [s.navbar, s.toggleNavbar]);

    return (
        <section className="controls__navbar">
            {navbar
                ? <MenuOpenIcon onClick={() => toggleNavbar()} />
                : <MenuIcon onClick={() => toggleNavbar()} />
            }
        </section>
    );
}

export default ControlsNavbar;
