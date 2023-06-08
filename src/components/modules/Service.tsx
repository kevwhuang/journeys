import React from 'react';

import ServicePartA from '../elements/ServicePartA';
import ServicePartB from '../elements/ServicePartB';
import ServicePartC from '../elements/ServicePartC';

import '../../styles/modules/Service.scss';

function Service(): React.ReactElement {
    return (
        <section className="service">
            <ServicePartA />
            <ServicePartB />
            <ServicePartC />
        </section>
    );
}

export default Service;
