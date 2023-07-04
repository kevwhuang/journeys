import React from 'react';

import FeaturesPartA from '../elements/FeaturesPartA';
import FeaturesPartB from '../elements/FeaturesPartB';

import '../../styles/modules/Features.scss';

function Features(): React.ReactElement {
    return (
        <section className="features">
            <FeaturesPartA />
            <FeaturesPartB />
        </section>
    );
}

export default Features;
