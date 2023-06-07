import React from 'react';

import useZustand from '../../hooks/useZustand';

function ControlsModal(): React.ReactElement {
    const modal = useZustand(s => s.modals.collage);

    return (
        <section className={modal ? 'collage__modal' : 'collage__modal closed'}>
        </section>
    );
}

export default ControlsModal;
