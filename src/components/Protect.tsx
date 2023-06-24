import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
    component: React.ReactElement;
}

function Protect(props: Props): React.ReactElement {
    const { isAuthenticated, isLoading, loginWithRedirect: login, user } = useAuth0();

    if (isLoading) return <></>;
    !isAuthenticated && login();

    if (isAuthenticated) {
        if (user && !user.email_verified) {
            alert('Please verify your email to continue.');
            return <Navigate to="/guide" />;
        }

        if (user) return <>{props.component}</>;
    }

    return <></>;
}

export default Protect;
