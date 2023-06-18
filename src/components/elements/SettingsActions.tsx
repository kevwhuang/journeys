import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';

import toastOptions from '../../features/toastOptions';

function SettingsActions(): React.ReactElement {
    const { logout, user }: any = useAuth0();

    async function handleClick() {
        const confirmed
            = confirm('Are you sure you wish to delete your account? This action is irreversible.');

        if (!confirmed) return;

        await axios(`/.netlify/functions/deleteUser`, {
            headers: {
                'x-username': user.nickname,
            },
            method: 'DELETE',
        });

        logout({ logoutParams: { returnTo: location.origin } });
        toast('You\'ve deleted your account.', toastOptions);
    }

    return (
        <section className="settings__actions">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <button onClick={handleClick}>Delete Account</button>
        </section>
    );
}

export default SettingsActions;
