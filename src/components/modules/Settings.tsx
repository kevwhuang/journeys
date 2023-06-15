import React from 'react';

import SettingsActions from '../elements/SettingsActions';
import SettingsForm from '../elements/SettingsForm';

import '../../styles/modules/Settings.scss';

function Settings(): React.ReactElement {
    return (
        <section className="settings">
            <SettingsForm />
            <SettingsActions />
        </section>
    );
}

export default Settings;
