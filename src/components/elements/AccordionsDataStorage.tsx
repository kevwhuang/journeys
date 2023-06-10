import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import {
    lorem50,
    lorem150,
} from '../../data/lorem';

function AccordionsDataStorage(): React.ReactElement {
    return (
        <section className="accordions__data-storage">
            <MuiAccordionParent
                aria="data-storage"
                header="Data Storage"
                content={lorem50}
            >
                <MuiAccordion
                    aria="data-storage-1"
                    header="Cookies"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="data-storage-2"
                    header="Local Storage"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="data-storage-3"
                    header="Cloud Sync"
                    content={lorem150}
                />
                <MuiAccordion
                    aria="data-storage-4"
                    header="Backups"
                    content={lorem150}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsDataStorage;
