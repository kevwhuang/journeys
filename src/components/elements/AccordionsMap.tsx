import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import { lorem50, lorem200 } from '../../data/lorem';

function AccordionsMap(): React.ReactElement {
    return (
        <section className="accordions__map">
            <MuiAccordionParent
                aria="map"
                header="Map"
                content={lorem50}
            >
                <MuiAccordion
                    aria="map-1"
                    header="Basics"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="map-2"
                    header="Geolocation"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="map-3"
                    header="Tracking"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="map-4"
                    header="Rendering"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="map-5"
                    header="Controls"
                    content={lorem200}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsMap;
