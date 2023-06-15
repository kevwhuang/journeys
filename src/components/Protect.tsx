import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
    component: React.ReactElement;
}

function Protect(props: Props): React.ReactElement {
    const { isAuthenticated, isLoading, loginWithRedirect: login } = useAuth0();

    !isLoading && !isAuthenticated && login();

    if (!isLoading && isAuthenticated) {
        return <>{props.component}</>;
    }

    return <></>;
}

export default Protect;
