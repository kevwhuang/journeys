import React from 'react';

function HeroContent(): React.ReactElement {
    return (
        <section className="hero__content">
            <h1>
                <span>🐛</span>
                hello adventurer&nbsp;
                <span>...</span>
            </h1>
            <article>
                <b>Journeys</b> is an exploration app that unveils the world around you as you travel.
                Welcoming all hikers, bikers, drivers, adventurers, and nomads to explore!
            </article>
        </section>
    );
}

export default HeroContent;
