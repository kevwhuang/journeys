import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from 'react-hook-form';

import CircularProgress from '@mui/material/CircularProgress';

import useAxios from '../../hooks/useAxios';
import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';
import { __Notification } from '../../features/classes';

interface Axios {
    data: Profile[],
    loading: boolean,
    mutate: any,
}

interface Profile {
    bio: string,
    country: string,
    email: string,
    experience: number,
    first_name: string,
    last_name: string,
    map: number,
    notifications: string,
    page: string,
    photo: string,
    registered: string,
    theme: number,
    units: number,
    username: string,
}

function SettingsForm(): React.ReactElement {
    const state = useZustand();
    const { logout, user }: any = useAuth0();

    const { data: settings, loading }: Axios = useAxios({
        endpoint: 'getSettings',
        options: {
            headers: {
                'x-username': user.nickname,
            },
        },
    });

    const { handleSubmit: onSubmit, register }
        = useForm({ values: settings?.[0], shouldUseNativeValidation: true });

    function getClassName() {
        let className = loading ? 'settings__form--spinner' : 'settings__form--spinner loaded';

        if (state.navbar) className += ' opened';
        return className;
    }

    async function handleClick() {
        const confirmed
            = confirm('Are you sure you want to delete your account? This action is irreversible.');

        if (!confirmed) return;

        await axios('/.netlify/functions/deleteUser',
            {
                headers: {
                    'x-username': user.nickname,
                },
                method: 'DELETE',
            })
            .catch(err => console.log(err));

        logout({ logoutParams: { returnTo: location.origin } });
        toast('You\'ve deleted your account.', toastOptions);
    }

    async function handleSubmit(data: any) {
        await axios('/.netlify/functions/patchUser',
            {
                data: {
                    experience: state.records.experience,
                    notifications: JSON.stringify(state.records.notifications),
                    username: user.nickname,
                },
                method: 'PATCH',
            })
            .catch(err => console.log(err));

        const res = await axios('/.netlify/functions/putUser',
            {
                data,
                method: 'PUT',
            })
            .catch(err => console.log(err));

        if (res && res.status === 200) {
            state.initializeSystem({
                map: Number(data.map),
                theme: Number(state.system.theme),
                units: Number(data.units),
            });

            state.initializeUser({
                first: data.first_name,
                last: data.last_name,
                photo: data.photo,
            });

            state.addNotification(new __Notification('Settings', 'You\'ve updated your settings.'));
            toast('Your settings have been synced.', toastOptions);
        } else {
            toast('An unknown error has occured.', { ...toastOptions, icon: '✘' });
        }
    }

    return (
        <section className={state.navbar ? 'settings__form opened' : 'settings__form'}>
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <div className={getClassName()}>
                <CircularProgress size={'121.5px'} />
            </div>
            {!loading
                && <form onSubmit={onSubmit(handleSubmit)}>
                    <h2>Settings</h2>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-registered">Registered</label>
                        </div>
                        <input
                            id="input-settings-registered"
                            placeholder={settings?.[0].registered.slice(0, 10)}
                            disabled
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-email">Email</label>
                        </div>
                        <input
                            id="input-settings-email"
                            placeholder={settings?.[0].email}
                            disabled
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-username">Username</label>
                        </div>
                        <input
                            id="input-settings-username"
                            placeholder={settings?.[0].username}
                            disabled
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-first-name">First Name</label>
                        </div>
                        <input
                            id="input-settings-first-name"
                            type="text"
                            maxLength={25}
                            pattern="[A-Za-z ]*"
                            autoComplete="off"
                            {...register('first_name')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-last-name">Last Name</label>
                        </div>
                        <input
                            id="input-settings-last-name"
                            type="text"
                            maxLength={25}
                            pattern="[A-Za-z ]*"
                            autoComplete="off"
                            {...register('last_name')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-country">Country</label>
                        </div>
                        <input
                            id="input-settings-country"
                            type="text"
                            minLength={2}
                            maxLength={2}
                            pattern="[A-Z]*"
                            autoComplete="off"
                            {...register('country')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-photo">Photo</label>
                        </div>
                        <input
                            id="input-settings-photo"
                            type="url"
                            maxLength={100}
                            {...register('photo')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-page">Page</label>
                        </div>
                        <input
                            id="input-settings-page"
                            type="url"
                            maxLength={100}
                            {...register('page')}
                        />
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-bio">Bio</label>
                        </div>
                        <textarea
                            id="input-settings-bio"
                            maxLength={1000}
                            {...register('bio')}
                        >
                        </textarea>
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-theme">Theme</label>
                        </div>
                        <select
                            id="input-settings-theme"
                            {...register('theme')}
                        >
                            <option value="0">Light</option>
                            <option value="1">Dark</option>
                        </select>
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-units">Units</label>
                        </div>
                        <select
                            id="input-settings-units"
                            {...register('units')}
                        >
                            <option value="0">Metric</option>
                            <option value="1">Imperial</option>
                        </select>
                    </div>
                    <div className="settings__form--field">
                        <div className="settings__form--label">
                            <label htmlFor="input-settings-map">Map</label>
                        </div>
                        <select
                            id="input-settings-map"
                            {...register('map')}
                        >
                            <option value="0">Road</option>
                            <option value="1">Satellite</option>
                            <option value="2">Hybrid</option>
                        </select>
                    </div>
                    <button type="submit">Update</button>
                    <button
                        type="button"
                        onClick={handleClick}
                    >
                        Delete ⚠
                    </button>
                </form>
            }
        </section>
    );
}

export default SettingsForm;
