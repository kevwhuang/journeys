import React from 'react';

import useZustand from '../../hooks/useZustand';

interface Props {
    source: string,
    'data-title': string,
}

function CollageImagesItem(props: Props): React.ReactElement {
    const changeGallery = useZustand(s => s.changeGallery);

    function handleClick() {
        // @ts-ignore
        document.startViewTransition(() => {
            const modal = document.querySelector('.gallery');

            modal && modal.classList.remove('closed');
            changeGallery(`/assets/collage/${props.source}.webp`);
        });
    }

    return (
        <div
            className="collage__images--item"
            onClick={handleClick}
        />
    );
}

export default CollageImagesItem;
