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
import { __Position } from '../../features/classes';

function ControlsMap(): React.ReactElement {
    const state = useZustand();
    let signal;
    let signalStatus;

    switch (state.signal) {
        case 0:
            signal = <SignalCellularConnectedNoInternet0BarOutlinedIcon className="s0" />;
            signalStatus = 'No Signal';
            break;
        case 1:
            signal = <SignalCellularAlt1BarOutlinedIcon className="s1" />;
            signalStatus = 'Weak';
            break;
        case 2:
            signal = <SignalCellularAlt2BarOutlinedIcon className="s2" />;
            signalStatus = 'Medium';
            break;
        case 3:
            signal = <SignalCellularAltOutlinedIcon className="s3" />;
            signalStatus = 'Strong';
    }

    function handleClickFocus() {
        if (!state.focus) toast('You\'ve focused the map.', toastOptions);
        state.toggleFocus();
    }

    function handleClickPin() {
        if (!state.position.lat && !state.position.long) {
            return;
        }

        if (state.pins.length === 100) {
            toast('You\'ve reached the 100 pin limit.', { ...toastOptions, icon: '✘' });
            return;
        }

        if (!state.pins.length) {
            state.addPin(new __Position(state.position.lat, state.position.long));
            toast('You\'ve dropped a new pin.', toastOptions);
            return;
        }

        if (state.pins.length) {
            const current = { lat: state.position.lat, long: state.position.long };
            const old = state.pins;

            if (JSON.stringify(current).includes(JSON.stringify(old).slice(1, old.length - 2))) {
                toast('You\'ve already added this pin.', { ...toastOptions, icon: '✘' });
            } else {
                state.addPin(new __Position(state.position.lat, state.position.long));
                toast('You\'ve dropped a new pin.', toastOptions);
            }
        }
    }

    function handleClickPower() {
        const message = state.power ? 'You\'ve disabled tracking.' : 'You\'ve enabled tracking.';

        state.togglePower();
        toast(message, toastOptions);
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
                        onClick={handleClickPower}
                    />
                    : <PowerOffOutlinedIcon onClick={handleClickPower} />
                }
            </MuiTooltip>
            <MuiTooltip title={state.focus ? 'Focused' : 'Unfocused'}>
                {state.focus
                    ? <NavigationIcon
                        className="active"
                        onClick={handleClickFocus}
                    />
                    : <NavigationOutlinedIcon onClick={handleClickFocus} />
                }
            </MuiTooltip>
            <MuiTooltip title="Pin">
                <PushPinOutlinedIcon
                    className={(state.power && state.signal) ? 'active' : ''}
                    onClick={handleClickPin}
                />
            </MuiTooltip>
        </section>
    );
}

export default ControlsMap;
