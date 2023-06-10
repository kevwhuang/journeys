import React from 'react';

import AccordionsDataStorage from '../elements/AccordionsDataStorage';
import AccordionsGeneral from '../elements/AccordionsGeneral';
import AccordionsMap from '../elements/AccordionsMap';
import AccordionsPins from '../elements/AccordionsPins';
import AccordionsProfile from '../elements/AccordionsProfile';
import AccordionsRankings from '../elements/AccordionsRankings';
import AccordionsSpecialFeatures from '../elements/AccordionsSpecialFeatures';

import '../../styles/modules/Accordions.scss';

function Accordions(): React.ReactElement {
    return (
        <section className="accordions">
            <AccordionsGeneral />
            <AccordionsMap />
            <AccordionsPins />
            <AccordionsProfile />
            <AccordionsRankings />
            <AccordionsDataStorage />
            <AccordionsSpecialFeatures />
        </section>
    );
}

export default Accordions;
