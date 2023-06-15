import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
    component: React.ReactElement;
}

function Protect(props: Props): React.ReactElement {
    const { isAuthenticated, loginWithRedirect: login } = useAuth0();

    if (!isAuthenticated) {
        login();
        return <></>;
    }

    return (
        <>
            {props.component}
        </>
    );
}

export default Protect;
