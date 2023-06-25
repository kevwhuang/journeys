import React from 'react';

import useZustand from '../../hooks/useZustand';

import '../../styles/modals/Gallery.scss';

function Gallery(): React.ReactElement {
    const [gallery, modal] = useZustand(s => [s.gallery, s.modals.gallery]);

    function handleClick(e: any) {
        // @ts-ignore
        document.startViewTransition(() => {
            e.target.classList.add('closed');
        });
    }

    return (
        <section
            className={modal ? 'gallery' : 'gallery closed'}
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

export default Gallery;
