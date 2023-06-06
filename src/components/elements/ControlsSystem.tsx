import React from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

function ControlsSystem(): React.ReactElement {
    const state = useZustand();

    return (
        <section className="controls__system">
            <MuiTooltip title="Refresh">
                <RefreshOutlinedIcon
                    className={state.page === 'rankings' ? 'active' : ''}
                    onClick={() => { }}
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
                    ? <DarkModeOutlinedIcon onClick={() => state.toggleTheme(0)} />
                    : <LightModeOutlinedIcon onClick={() => state.toggleTheme(1)} />
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
