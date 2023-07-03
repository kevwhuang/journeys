import React from 'react';

import SettingsForm from '../elements/SettingsForm';

import '../../styles/modules/Settings.scss';

function Settings(): React.ReactElement {
    return (
        <section className="settings">
            <SettingsForm />
        </section>
    );
}

export default Settings;
