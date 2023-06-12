import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import NavigationIcon from '@mui/icons-material/Navigation';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import PowerIcon from '@mui/icons-material/Power';
import PowerOffOutlinedIcon from '@mui/icons-material/PowerOffOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import SignalCellularAlt1BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt1BarOutlined';
import SignalCellularAlt2BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt2BarOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SignalCellularConnectedNoInternet0BarOutlinedIcon
    from '@mui/icons-material/SignalCellularConnectedNoInternet0BarOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

import toastOptions from '../../features/toastOptions';
import { _Pin } from '../../features/classes';

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

    function handleClick() {
        if (state.records.pins.length === 100) {
            return toast('You\'ve reached the 100 pin limit.', { ...toastOptions, icon: '✘' });
        }

        if (state.records.pins.length) {
            const current = { lat: state.position.lat, long: state.position.long };
            const old = state.records.pins[0];

            if (JSON.stringify(current) !== JSON.stringify(old)) {
                state.addPin(new _Pin(state.position.lat, state.position.long));
            }
        } else if (state.position.lat !== 0 && state.position.long !== 0) {
            state.addPin(new _Pin(state.position.lat, state.position.long));
        }
    }

    return (
        <section className="controls__map">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <MuiTooltip title={signalStatus}>
                {signal}
            </MuiTooltip>
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
            <MuiTooltip title="Pin">
                <PushPinOutlinedIcon
                    className={state.power ? 'active' : ''}
                    onClick={handleClick}
                />
            </MuiTooltip>
        </section>
    );
}

export default ControlsMap;
