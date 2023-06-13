import React from 'react';

import useZustand from '../../hooks/useZustand';

function ControlsModal(): React.ReactElement {
    const [gallery, modal] = useZustand(s => [s.gallery, s.modals.collage]);

    function handleClick(e: any) {
        // @ts-ignore
        document.startViewTransition(() => {
            e.target.classList.add('closed');
        });
    }

    return (
        <section
            className={modal ? 'collage__modal' : 'collage__modal closed'}
            onClick={e => handleClick(e)}
        >
            <img
                src={gallery}
                alt="Modal"
                draggable="false"
            />
        </section>
    );
}

export default ControlsModal;
