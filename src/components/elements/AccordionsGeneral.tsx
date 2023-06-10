import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import { lorem50, lorem100 } from '../../data/lorem';

function AccordionsGeneral(): React.ReactElement {
    return (
        <section className="accordions__general">
            <MuiAccordionParent
                aria="general"
                header="General"
                content={lorem50}
                expanded={true}
            >
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
                <MuiAccordion
                    aria="general-3"
                    header="Open Source"
                    content={lorem100}
                />
                <MuiAccordion
                    aria="general-4"
                    header="Troubleshooting"
                    content={lorem100}
                />
                <MuiAccordion
                    aria="general-5"
                    header="Resources"
                    content={lorem100}
                />
                <MuiAccordion
                    aria="general-6"
                    header="Disclaimer"
                    content={lorem100}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsGeneral;
