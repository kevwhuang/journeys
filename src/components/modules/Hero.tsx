import React from 'react';

import HeroActions from '../elements/HeroActions';
import HeroContent from '../elements/HeroContent';

import '../../styles/modules/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <header className="hero">
            <HeroContent />
            <HeroActions />
        </header>
    );
}

export default Hero;
