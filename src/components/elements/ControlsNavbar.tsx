import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import useStore from '../../hooks/useZustand';

function ControlsNavbar(): React.ReactElement {
    const [navbar, toggleNavbar] = useStore(s => [s.navbar, s.toggleNavbar]);

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
