import React from 'react';

import CollageHeading from '../elements/CollageHeading';
import CollageImages from '../elements/CollageImages';
import CollageModal from '../modals/CollageModal';

import '../../styles/modules/Collage.scss';

function Collage(): React.ReactElement {
    return (
        <section className="collage">
            <CollageModal />
            <CollageHeading />
            <CollageImages />
        </section>
    );
}

export default Collage;
