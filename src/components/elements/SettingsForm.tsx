import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from 'react-hook-form';

import CircularProgress from '@mui/material/CircularProgress';

import useAxios from '../../hooks/useAxios';
import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

interface Axios {
    data: Profile[],
    loading: boolean,
    mutate: any,
}

interface Profile {
    bio: string,
    country: string,
    first_name: string,
    id: number,
    last_name: string,
    map: number,
    page: string,
    photo: string,
    registered: string,
    theme: number,
    units: number,
    username: string,
}

function SettingsForm(): React.ReactElement {
    const navbar = useZustand(s => s.navbar);
    const { user }: any = useAuth0();

    const { data: settings, loading }: Axios = useAxios({
        endpoint: 'getSettings',
        options: {
            headers: {
                'x-username': user.nickname,
            },
        },
    });

    const { formState, handleSubmit: onSubmit, register }
        = useForm({ values: settings?.[0], shouldUseNativeValidation: true });

    function getClassName() {
        let className = loading ? 'settings__form--spinner' : 'settings__form--spinner loaded';

        if (navbar) className += ' opened';
        return className;
    }

    function handleSubmit(data: any) {
        data;
        formState.isSubmitSuccessful
            && toast('Your settings have been updated.', toastOptions);
    }

    return (
        <section className="settings__form">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <div className={getClassName()}>
                <CircularProgress size={'121.5px'} />
            </div>
            {!loading
                && <form onSubmit={onSubmit(handleSubmit)}>
                    <h2>Account Settings</h2>
                    <div className="settings__form--field">
                        <label>Username</label>
                        <input
                            placeholder={settings?.[0].username}
                            disabled
                        />
                    </div>
                    <div className="settings__form--field">
                        <label>Registration Date</label>
                        <input
                            placeholder={settings?.[0].registered.slice(0, 10)}
                            disabled
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-first-name">First Name</label>
                        <input
                            id="input-settings-first-name"
                            type="text"
                            maxLength={25}
                            {...register('first_name')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-last-name">Last Name</label>
                        <input
                            id="input-settings-last-name"
                            type="text"
                            maxLength={25}
                            {...register('last_name')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-country">Country</label>
                        <input
                            id="input-settings-country"
                            type="text"
                            minLength={2}
                            maxLength={2}
                            {...register('country')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-photo">Photo</label>
                        <input
                            id="input-settings-photo"
                            type="url"
                            maxLength={100}
                            {...register('photo')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-page">Page</label>
                        <input
                            id="input-settings-page"
                            type="url"
                            maxLength={25}
                            {...register('page')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-bio">Bio</label>
                        <textarea
                            id="input-settings-bio"
                            maxLength={1000}
                            {...register('bio')}
                        >
                        </textarea>
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-theme">Theme</label>
                        <select
                            id="input-settings-theme"
                            {...register('theme')}
                        >
                            <option value="0">Light</option>
                            <option value="1">Dark</option>
                        </select>
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-units">Units</label>
                        <select
                            id="input-settings-units"
                            {...register('units')}
                        >
                            <option value="0">Metric</option>
                            <option value="1">Imperial</option>
                        </select>
                    </div>
                    <div className="settings__form--field">
                        <label htmlFor="input-settings-map">Map</label>
                        <select
                            id="input-settings-map"
                            {...register('map')}
                        >
                            <option value="0">Road</option>
                            <option value="1">Satellite</option>
                            <option value="2">Hybrid</option>
                        </select>
                    </div>
                    <button type="submit">Update Settings</button>
                </form>
            }
        </section>
    );
}

export default SettingsForm;
