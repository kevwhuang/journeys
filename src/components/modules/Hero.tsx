import React from 'react';

import HeroDescription from '../elements/HeroDescription';
import HeroTitle from '../elements/HeroTitle';
import HeroSignup from '../elements/HeroSignup';

import '../../styles/modules/Hero.scss';

function Hero(): React.ReactElement {
    return (
        <header className="hero">
            <HeroTitle />
            <HeroDescription />
            <HeroSignup />
        </header>
    );
}

export default Hero;
