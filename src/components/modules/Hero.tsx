import React from 'react';

import HeroContent from '../elements/HeroContent';
import HeroActions from '../elements/HeroActions';

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
