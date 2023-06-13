import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

import toastOptions from '../../features/toastOptions';
import { _Notification } from '../../features/classes';

function ControlsSystem(): React.ReactElement {
    const state = useZustand();

    function handleClickRefresh() {
        return;
    }

    function handleClickTheme(theme: number) {
        const subject = theme ? 'You\'ve turned off the lights.' : 'You\'ve turned on the lights.';

        state.addNotification(new _Notification('Action', subject, 0));
        state.toggleTheme(theme);
        toast(subject, toastOptions);
    }

    return (
        <section className="controls__system">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <MuiTooltip title="Refresh">
                <RefreshOutlinedIcon
                    className={state.page === 'rankings' ? 'active' : ''}
                    onClick={handleClickRefresh}
                />
            </MuiTooltip>
            <MuiTooltip title="Top">
                <VerticalAlignTopOutlinedIcon onClick={() => scroll(0, 0)} />
            </MuiTooltip>
            <MuiTooltip title="Notifications">
                <NotificationsNoneOutlinedIcon
                    className={state.modals.notifications ? 'active' : ''}
                    onClick={() => state.toggleModalNotifications()}
                />
            </MuiTooltip>
            <span aria-label={`${state.records.notifications.length} notifications.`}>
                {state.records.notifications.length}
            </span>
            <MuiTooltip title={state.settings.theme ? 'Dark' : 'Light'}>
                {state.settings.theme
                    ? <DarkModeOutlinedIcon onClick={() => handleClickTheme(0)} />
                    : <LightModeOutlinedIcon onClick={() => handleClickTheme(1)} />
                }
            </MuiTooltip>
            <MuiTooltip title={state.authenticated ? 'Logged In' : 'Logged Out'}>
                {state.authenticated
                    ? <LogoutOutlinedIcon onClick={() => state.toggleAuthenticated()} />
                    : <LoginOutlinedIcon onClick={() => state.toggleAuthenticated()} />
                }
            </MuiTooltip>
        </section>
    );
}

export default ControlsSystem;
