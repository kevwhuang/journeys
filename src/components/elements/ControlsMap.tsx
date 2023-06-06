import React from 'react';

import NavigationIcon from '@mui/icons-material/Navigation';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import PowerIcon from '@mui/icons-material/Power';
import PowerOffOutlinedIcon from '@mui/icons-material/PowerOffOutlined';
import SignalCellularAlt1BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt1BarOutlined';
import SignalCellularAlt2BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt2BarOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SignalCellularConnectedNoInternet0BarOutlinedIcon
    from '@mui/icons-material/SignalCellularConnectedNoInternet0BarOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

function ControlsMap(): React.ReactElement {
    const state = useZustand();

    let signal: React.ReactElement;
    let signalStatus: string;

    if (!state.signal) {
        signal = <SignalCellularConnectedNoInternet0BarOutlinedIcon className="s0" />;
        signalStatus = 'No Signal';
    } else if (state.signal === 1) {
        signal = <SignalCellularAlt1BarOutlinedIcon className="s1" />;
        signalStatus = 'Weak';
    } else if (state.signal === 2) {
        signal = <SignalCellularAlt2BarOutlinedIcon className="s2" />;
        signalStatus = 'Medium';
    } else {
        signal = <SignalCellularAltOutlinedIcon className="s3" />;
        signalStatus = 'Strong';
    }

    return (
        <section className="controls__map">
            <MuiTooltip title={state.power ? 'On' : 'Off'}>
                {state.power
                    ? <PowerIcon
                        className="active"
                        onClick={() => state.togglePower()}
                    />
                    : <PowerOffOutlinedIcon onClick={() => state.togglePower()} />
                }
            </MuiTooltip>
            <MuiTooltip title={state.focus ? 'Focused' : 'Unfocused'}>
                {state.focus
                    ? <NavigationIcon
                        className="active"
                        onClick={() => state.toggleFocus()}
                    />
                    : <NavigationOutlinedIcon onClick={() => state.toggleFocus()} />
                }
            </MuiTooltip>
            <MuiTooltip title={signalStatus}>
                {signal}
            </MuiTooltip>
        </section>
    );
}

export default ControlsMap;
