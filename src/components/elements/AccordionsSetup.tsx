import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import { lorem50, lorem100 } from '../../data/lorem';

function AccordionsSetup(): React.ReactElement {
    return (
        <section className="accordions__setup">
            <MuiAccordionParent
                aria="setup"
                header="Setup"
                content={lorem50}
            >
                <MuiAccordion
                    aria="setup-1"
                    header="Installation"
                    content={lorem100}
                />
                <MuiAccordion
                    aria="setup-2"
                    header="Network"
                    content={lorem100}
                />
                <MuiAccordion
                    aria="setup-3"
                    header="Permissions"
                    content={lorem100}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsSetup;
