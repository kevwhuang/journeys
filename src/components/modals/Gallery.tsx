import React from 'react';

import useZustand from '../../hooks/useZustand';

import '../../styles/modals/Gallery.scss';

function Gallery(): React.ReactElement {
    const [gallery, modal, navbar]
        = useZustand(s => [s.gallery, s.modals.gallery, s.navbar]);

    function getClassName() {
        let className = modal ? 'gallery' : 'gallery closed';

        if (navbar) className += ' menu';
        return className;
    }

    function handleClick(e: any) {
        // @ts-ignore
        document.startViewTransition(() => {
            e.target.classList.add('closed');
        });
    }

    return (
        <section
            className={getClassName()}
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
