import React from 'react';

import PolicyPartA from '../elements/PolicyPartA';
import PolicyPartB from '../elements/PolicyPartB';
import PolicyPartC from '../elements/PolicyPartC';

import '../../styles/modules/Policy.scss';

function Policy(): React.ReactElement {
    return (
        <section className="policy">
            <PolicyPartA />
            <PolicyPartB />
            <PolicyPartC />
        </section>
    );
}

export default Policy;
