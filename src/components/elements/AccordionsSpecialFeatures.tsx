import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import { lorem50, lorem150 } from '../../data/lorem';

function AccordionsSpecialFeatures(): React.ReactElement {
    return (
        <section className="accordions__special-features">
            <MuiAccordionParent
                aria="special-features"
                header="Special Features"
                content={lorem50}
            >
                <MuiAccordion
                    aria="special-features-1"
                    header="Theme"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="special-features-2"
                    header="Keyboard Controls"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="special-features-3"
                    header="Voice Commands"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="special-features-4"
                    header="Secrets"
                    content={lorem150}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsSpecialFeatures;
