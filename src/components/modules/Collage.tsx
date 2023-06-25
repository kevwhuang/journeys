import React from 'react';

import CollageImages from '../elements/CollageImages';

import '../../styles/modules/Collage.scss';

function Collage(): React.ReactElement {
    return (
        <>
            <section className="collage">
                <CollageImages />
            </section>
            <div className="collage--gutter" />
        </>
    );
}

export default Collage;
