import React from 'react';
import { useInView } from 'react-intersection-observer';

import useZustand from '../../hooks/useZustand';

const options = {
    threshold: 1,
    triggerOnce: true,
};

function ActionsHeadings(): React.ReactElement {
    const LINK = 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif';
    const navbar = useZustand(s => s.navbar);
    const { inView, ref } = useInView(options);

    function getClassName() {
        let className = inView ? 'play' : '';

        if (navbar) className += ' opened';

        return className;
    }

    return (
        <section className="actions__headings" ref={ref}>
            <div className="actions__headings--container">
                <span className={getClassName()}>WALK</span>
                <span className={getClassName()}>BIKE</span>
                <span className={getClassName()}>RIDE</span>
                <span className={getClassName()}>DRIVE</span>
                <span className={getClassName()}>SAIL</span>
                <span className={getClassName()}>FLY</span>
                <span className={getClassName()}>
                    the&nbsp;
                    <u>choice</u>
                    &nbsp;is&nbsp;
                    <u>
                        <i className={getClassName()}>y</i>
                        <i className={getClassName()}>o</i>
                        <i className={getClassName()}>u</i>
                        <i className={getClassName()}>r</i>
                        <i className={getClassName()}>s&nbsp;</i>
                        …
                    </u>
                </span>
                <span className={getClassName()}>
                    see
                    <i className={getClassName()}>k&nbsp;</i>
                    adventure
                    <img
                        className={getClassName()}
                        src={inView ? LINK : ''}
                        draggable="false"
                    />
                </span>
            </div>
        </section>
    );
}

export default ActionsHeadings;
