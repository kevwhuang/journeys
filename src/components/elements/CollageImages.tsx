import React from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuid } from 'uuid';

import CollageImagesItem from './CollageImagesItem';

const images = [
    'Bali',
    'Bonneville',
    'Tokyo',
    'Enchanted Rock',
    'Torres del Paine',
    'Norway',
    'Iceland',
    'Lake Baikal',
    'Cappadocia',
    'Zhangjiajie',
    'Antelope Canyon',
    'Manhattan',
    'Maldives',
];

const options = {
    rootMargin: '200px 0px',
    triggerOnce: true,
};

const sources = [
    '1-bali-jungle',
    '2-bonneville-salt-flats',
    '3-tokyo-street',
    '4-enchanted-rock',
    '5-torres-del-paine',
    '6-norway-fjord',
    '7-iceland-northern-lights',
    '8-lake-baikal',
    '9-cappadocia',
    '10-zhangjiajie',
    '11-antelope-canyon',
    '12-manhattan',
    '13-maldives-resort',
];

function CollageImages(): React.ReactElement {
    const { inView, ref } = useInView(options);

    return (
        <section
            className={inView ? 'collage__images' : 'collage__images lazy'}
            ref={ref}
        >
            {images.map((aria, i) => (
                <CollageImagesItem key={uuid()} aria={aria} source={sources[i]} />
            ))}
        </section>
    );
}

export default CollageImages;
