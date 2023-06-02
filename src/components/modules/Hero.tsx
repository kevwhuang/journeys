import React from 'react';

import HeroContent from '../elements/HeroContent';
import HeroSignup from '../elements/HeroSignup';

import '../../styles/modules/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <header className="hero p-40">
            <HeroContent />
            <HeroSignup />
        </header>
    );
}

export default Hero;
