import React from 'react';
import { useInView } from 'react-intersection-observer';

const options = {
    threshold: 1,
    triggerOnce: true,
};

function ActionsHeadings(): React.ReactElement {
    const { inView, ref } = useInView(options);

    return (
        <section
            className={inView ? 'actions__headings play' : 'actions__headings'}
            ref={ref}
        >
            <div className="actions__headings--container">
                <span>WALK</span>
                <span>BIKE</span>
                <span>RIDE</span>
                <span>DRIVE</span>
                <span>SAIL</span>
                <span>FLY</span>
                <span>the <u>choice</u> is <u>yours…</u></span>
                <span>see<u>k</u>&nbsp;adventure
                    <img
                        src={inView ? '/assets/rotating-earth.gif' : ''}
                        draggable="false"
                        loading="lazy"
                    />
                </span>
            </div>
        </section>
    );
}

export default ActionsHeadings;
