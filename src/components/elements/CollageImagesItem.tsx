import React from 'react';

import useZustand from '../../hooks/useZustand';

interface Props {
    aria: string,
    source: string,
}

function CollageImagesItem(props: Props): React.ReactElement {
    const { aria, source } = props;
    const changeGallery = useZustand(s => s.changeGallery);

    function handleClick() {
        // @ts-ignore
        document.startViewTransition(() => {
            const modal = document.querySelector('.collage__modal');

            modal && modal.classList.remove('closed');

            if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                changeGallery(`/public/assets/collage/${source}.webp`);
            } else if (import.meta.env.VITE_ENVIRONMENT === 'PRODUCTION') {
                changeGallery(`/assets/collage/${source}.webp`);
            }
        });
    }

    return (
        <div
            className="collage__images--item"
            aria-label={aria}
            onClick={handleClick}
        />
    );
}

export default CollageImagesItem;
