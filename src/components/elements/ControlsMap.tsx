import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import ExploreIcon from '@mui/icons-material/Explore';
import ExploreOffOutlinedIcon from '@mui/icons-material/ExploreOffOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
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
        const message = state.focus ? 'You\'ve unfocused the map.' : 'You\'ve focused the map.';

        state.toggleFocus();
        toast(message, toastOptions);
    }

    function handleClickPower() {
        const message = state.power ? 'You\'ve disabled tracking.' : 'You\'ve enabled tracking.';

        state.togglePower();
        toast(message, toastOptions);
    }

    async function getAddress(lat: number, long: number) {
        const res = await axios('/.netlify/functions/gmpReverseGeocoding',
            {
                headers: {
                    'x-coordinates': `latlng=${lat},${long}`,
                },
            })
            .catch(err => console.log(err));

        return res?.data ?? 'Unknown Address';
    }

    async function handleClickPin() {
        if (!state.position.lat && !state.position.long) {
            return;
        }

        if (state.pins.length === 100) {
            toast('You\'ve reached the 100 pin limit.', { ...toastOptions, icon: '✘' });
            return;
        }

        const [lat, long] = [state.position.lat, state.position.long];

        if (!state.pins.length) {
            state.addPin(new __Position(lat, long, await getAddress(lat, long), new Date().toISOString()));
            toast('You\'ve dropped a new pin.', toastOptions);
            return;
        }

        if (state.pins.length) {
            const all = JSON.stringify(state.pins);
            const current = JSON.stringify({ lat, long });

            if (all.includes(current.slice(1, current.length - 2))) {
                toast('You\'ve already added this pin.', { ...toastOptions, icon: '✘' });
            } else {
                state.addPin(new __Position(lat, long, await getAddress(lat, long), new Date().toISOString()));
                toast('You\'ve dropped a new pin.', toastOptions);
            }
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
                    ? <ExploreIcon
                        className="active"
                        onClick={handleClickPower}
                    />
                    : <ExploreOffOutlinedIcon onClick={handleClickPower} />
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
