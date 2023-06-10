import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';

import { lorem50, lorem100 } from '../../data/lorem';

function AccordionsGeneral(): React.ReactElement {
    return (
        <section className="accordions__general">
            <MuiAccordion
                aria="general-0"
                header="General"
                content={lorem50}
                expanded={true}
            />
            <MuiAccordion
                aria="general-1"
                header="Introduction"
                content={lorem100}
            />
            <MuiAccordion
                aria="general-2"
                header="Key Features"
                content={lorem100}
            />
        </section>
    );
}

export default AccordionsGeneral;
