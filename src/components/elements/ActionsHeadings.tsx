import React from 'react';
import { useInView } from 'react-intersection-observer';

const options = {
    threshold: 1,
    triggerOnce: true,
};

function ActionsHeadings(): React.ReactElement {
    const { inView, ref } = useInView(options);

    return (
        <section className="actions__headings" ref={ref}>
            <div className="actions__headings--container">
                <span className={inView ? 'play' : ''}>WALK</span>
                <span className={inView ? 'play' : ''}>BIKE</span>
                <span className={inView ? 'play' : ''}>RIDE</span>
                <span className={inView ? 'play' : ''}>DRIVE</span>
                <span className={inView ? 'play' : ''}>SAIL</span>
                <span className={inView ? 'play' : ''}>FLY</span>
                <span className={inView ? 'play' : ''}>
                    the&nbsp;
                    <u>choice</u>
                    &nbsp;is&nbsp;
                    <u>
                        <i className={inView ? 'play' : ''}>y</i>
                        <i className={inView ? 'play' : ''}>o</i>
                        <i className={inView ? 'play' : ''}>u</i>
                        <i className={inView ? 'play' : ''}>r</i>
                        <i className={inView ? 'play' : ''}>s&nbsp;</i>
                        …
                    </u>
                </span>
                <span className={inView ? 'play' : ''}>
                    see
                    <u className={inView ? 'play' : ''}>k&nbsp;</u>
                    adventure
                    <img
                        className={inView ? 'play' : ''}
                        src={inView ? '/assets/rotating-earth.gif' : ''}
                        draggable="false"
                    />
                </span>
            </div>
        </section>
    );
}

export default ActionsHeadings;
