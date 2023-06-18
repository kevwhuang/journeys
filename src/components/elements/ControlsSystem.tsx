import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';

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
import { __Notification } from '../../features/classes';

function ControlsSystem(): React.ReactElement {
    const state = useZustand();
    const { isAuthenticated, isLoading, loginWithRedirect: login, logout } = useAuth0();

    function handleClickLogin() {
        login();
    }

    function handleClickLogout() {
        const confirmed = confirm('Are you sure you want to logout?');

        if (!confirmed) return;
        logout({ logoutParams: { returnTo: location.origin } });
        toast('You\'ve logged out.', toastOptions);
    }

    function handleClickRefresh() {
        state.toggleRefresh();
        toast('You\'ve refreshed the leaderboards.', toastOptions);
    }

    function handleClickTheme(theme: number) {
        const message = theme ? 'You\'ve turned off the lights.' : 'You\'ve turned on the lights.';

        state.addNotification(new __Notification('Action', message));
        state.toggleTheme(theme);
        toast(message, toastOptions);
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
            <MuiTooltip title={state.system.theme ? 'Dark' : 'Light'}>
                {state.system.theme
                    ? <DarkModeOutlinedIcon onClick={() => handleClickTheme(0)} />
                    : <LightModeOutlinedIcon onClick={() => handleClickTheme(1)} />
                }
            </MuiTooltip>
            <MuiTooltip title={isAuthenticated ? 'Logout' : 'Login'}>
                <>
                    {!isLoading && isAuthenticated && <LogoutOutlinedIcon onClick={handleClickLogout} />}
                    {!isLoading && !isAuthenticated && <LoginOutlinedIcon onClick={handleClickLogin} />}
                </>
            </MuiTooltip>
        </section>
    );
}

export default ControlsSystem;
