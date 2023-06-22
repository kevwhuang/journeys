import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import useZustand from '../../hooks/useZustand';

interface Props {
    children: React.ReactElement,
    delay?: number,
    title: string,
    offset?: string,
}

function MuiTooltip(props: Props): React.ReactElement {
    const theme = useZustand(s => s.system.theme);

    const sx = {
        bgcolor: theme ? '#407ad6' : '#d3382f',
        color: '#f3f4f5',
        cursor: 'default',
        fontFamily: 'SF Pro Display',
        fontSize: '16px',
        top: props.offset || '-5px',
        userSelect: 'none',
        zIndex: '0',
        '& .MuiTooltip-arrow': {
            color: theme ? '#407ad6' : '#d3382f',
        },
    };

    return (
        <Tooltip
            arrow
            title={props.title}
            enterDelay={props.delay || 1500}
            leaveDelay={100}
            TransitionComponent={Zoom}
            componentsProps={{ tooltip: { sx } }}
        >
            {props.children}
        </Tooltip>
    );
}

export default MuiTooltip;
