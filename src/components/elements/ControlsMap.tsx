import React from 'react';

import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import PowerIconOutlined from '@mui/icons-material/PowerOutlined';
import PowerOffOutlinedIcon from '@mui/icons-material/PowerOffOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

function ControlsMap(): React.ReactElement {
    const state = useZustand();

    return (
        <section className="controls__map">
            <MuiTooltip title={state.power ? 'On' : 'Off'}>
                {state.power
                    ? <PowerIconOutlined onClick={() => state.togglePower()} />
                    : <PowerOffOutlinedIcon onClick={() => state.togglePower()} />
                }
            </MuiTooltip>
            <MuiTooltip title="Focus">
                <NavigationOutlinedIcon />
            </MuiTooltip>
            <MuiTooltip title="Signal">
                <SignalCellularAltOutlinedIcon />
            </MuiTooltip>
        </section>
    );
}

export default ControlsMap;
