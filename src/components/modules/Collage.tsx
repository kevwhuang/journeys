import React from 'react';

import CollageImages from '../elements/CollageImages';
import CollageModal from '../modals/CollageModal';

import '../../styles/modules/Collage.scss';

function Collage(): React.ReactElement {
    return (
        <section className="collage">
            <CollageModal />
            <CollageImages />
        </section>
    );
}

export default Collage;
