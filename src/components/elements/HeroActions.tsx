import React from 'react';
import { Link } from 'react-router-dom';

function HeroActions(): React.ReactElement {
    return (
        <section className="hero__actions">
            <Link to="map">Start</Link>
            <Link to="guide">Guide</Link>
        </section>
    );
}

export default HeroActions;
