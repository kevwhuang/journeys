import React from 'react';

import ActionsHeadings from '../elements/ActionsHeadings';

import '../../styles/modules/Actions.scss';

function Actions(): React.ReactElement {
    return (
        <section className="actions">
            <ActionsHeadings />
        </section>
    );
}

export default Actions;
