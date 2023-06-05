import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import useZustand from '../../hooks/useZustand';

interface Props {
    children: React.ReactElement,
    title: string,
    offset?: string,
}

function MuiTooltip(props: Props): React.ReactElement {
    const theme = useZustand(s => s.settings.theme);

    const sx = {
        bgcolor: theme ? '#407ad6' : '#d3382f',
        color: '#f3f4f5',
        fontFamily: 'SF Pro Display',
        fontSize: '16px',
        top: props.offset || '',
        userSelect: 'none',
        '& .MuiTooltip-arrow': {
            color: theme ? '#407ad6' : '#d3382f',
        },
    };

    return (
        <Tooltip
            arrow
            title={props.title}
            enterDelay={1000}
            TransitionComponent={Zoom}
            componentsProps={{ tooltip: { sx } }}
        >
            {props.children}
        </Tooltip>
    );
}

export default MuiTooltip;
