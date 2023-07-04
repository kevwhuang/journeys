import React from 'react';

import AccordionsAccount from '../elements/AccordionsAccount';
import AccordionsDataStorage from '../elements/AccordionsDataStorage';
import AccordionsGeneral from '../elements/AccordionsGeneral';
import AccordionsMap from '../elements/AccordionsMap';
import AccordionsPins from '../elements/AccordionsPins';
import AccordionsRankings from '../elements/AccordionsRankings';
import AccordionsSetup from '../elements/AccordionsSetup';
import AccordionsSpecialFeatures from '../elements/AccordionsSpecialFeatures';

import '../../styles/modules/Accordions.scss';

function Accordions(): React.ReactElement {
    return (
        <section className="accordions">
            <AccordionsGeneral />
            <AccordionsSetup />
            <AccordionsMap />
            <AccordionsPins />
            <AccordionsRankings />
            <AccordionsAccount />
            <AccordionsDataStorage />
            <AccordionsSpecialFeatures />
        </section>
    );
}

export default Accordions;
