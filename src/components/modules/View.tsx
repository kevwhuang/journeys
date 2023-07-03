import React from 'react';

import ViewWrapper from '../elements/ViewWrapper';

import '../../styles/modules/View.scss';

function View(): React.ReactElement {
    return (
        <section className="view">
            <ViewWrapper />
        </section>
    );
}

export default View;
