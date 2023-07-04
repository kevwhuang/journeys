import React from 'react';
import { Navigate } from 'react-router-dom';
import { Status } from '@googlemaps/react-wrapper';

import CircularProgress from '@mui/material/CircularProgress';

function ViewRender(status: Status): React.ReactElement {
    if (status === Status.FAILURE) return <Navigate to="/error" />;

    return (
        <div className="view__render">
            <CircularProgress size={'121.5px'} />
        </div>
    );
}

export default ViewRender;
