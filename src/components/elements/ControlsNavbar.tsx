import React from 'react';

import useStore from '../../hooks/useZustand';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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
