import React from 'react';

function HeroContent(): React.ReactElement {
    return (
        <section className="hero__content">
            <h1 className="pb-20">
                hello adventurer
                <span>🐛</span>
            </h1>
            <article>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam quis accusantium
                distinctio rem ea laudantium soluta praesentium consequuntur veritatis similique,
                esse et veniam cumque itaque dignissimos corporis. Harum accusamus vitae incidunt
                consequuntur distinctio ratione ullam dolore consectetur, quidem eligendi aperiam
                ipsa itaque laborum ducimus porro aliquid sunt cupiditate, dolor nulla!
            </article>
        </section>
    );
}

export default HeroContent;
