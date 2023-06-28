import React from 'react';

import useZustand from '../../hooks/useZustand';

import CollageImages from '../elements/CollageImages';

import '../../styles/modules/Collage.scss';

function Collage(): React.ReactElement {
    const navbar = useZustand(s => s.navbar);

    return (
        <>
            <section className="collage">
                <CollageImages />
            </section>
            {!navbar && <div className="collage--gutter" />}
        </>
    );
}

export default Collage;
