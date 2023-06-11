import React from 'react';
import { useInView } from 'react-intersection-observer';

import austin from '../../assets/story/austin.webp';
import production from '../../assets/story/production.webp';
import programming from '../../assets/story/programming.webp';
import shanghai from '../../assets/story/shanghai.webp';
import {
    lorem50,
    lorem100,
} from '../../data/lorem';

const options = {
    delay: 200,
    threshold: 0.9,
    triggerOnce: true,
};

function StoryContent(): React.ReactElement {
    const { inView: inView1, ref: ref1 } = useInView(options);
    const { inView: inView2, ref: ref2 } = useInView(options);
    const { inView: inView3, ref: ref3 } = useInView(options);
    const { inView: inView4, ref: ref4 } = useInView(options);

    return (
        <section className="story__content">
            <div className="story__content--item">
                <article>
                    <h2>About Me</h2>
                    <h3>Journey to now</h3>
                    <p>{lorem50}</p>
                </article>
            </div>
            <div className="story__content--item">
                <article ref={ref1}>
                    <h2>Shanghai</h2>
                    <h3>Growing up overseas</h3>
                    <p>{lorem100}</p>
                </article>
                <img
                    className={inView1 ? 'active' : ''}
                    src={shanghai}
                    alt="Shanghai"
                    draggable="false"
                />
            </div>
            <div className="story__content--item">
                <img
                    className={inView2 ? 'active' : ''}
                    src={production}
                    alt="Production"
                    draggable="false"
                />
                <article ref={ref2}>
                    <h2>Production</h2>
                    <h3>Exploring my creative side</h3>
                    <p>{lorem100}</p>
                </article>
            </div>
            <div className="story__content--item">
                <article ref={ref3}>
                    <h2>Austin</h2>
                    <h3>Relocating to a new city</h3>
                    <p>{lorem100}</p>
                </article>
                <img
                    className={inView3 ? 'active' : ''}
                    src={austin}
                    alt="Austin"
                    draggable="false"
                />
            </div>
            <div className="story__content--item">
                <img
                    className={inView4 ? 'active' : ''}
                    src={programming}
                    alt="Programming"
                    draggable="false"
                />
                <article ref={ref4}>
                    <h2>Programming</h2>
                    <h3>Pursuing a tech career</h3>
                    <p>{lorem100}</p>
                </article>
            </div>
        </section>
    );
}

export default StoryContent;
