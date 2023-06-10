import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import {
    lorem50,
    lorem200,
} from '../../data/lorem';

function AccordionsPins(): React.ReactElement {
    return (
        <section className="accordions__pins">
            <MuiAccordionParent
                aria="pins"
                header="Pins"
                content={lorem50}
            >
                <MuiAccordion
                    aria="pins-1"
                    header="Basics"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="pins-2"
                    header="Hot Drop"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="pins-3"
                    header="Rendering"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="pins-4"
                    header="History"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="pins-5"
                    header="Editing"
                    content={lorem200}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsPins;
