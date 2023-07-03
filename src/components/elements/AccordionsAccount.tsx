import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import {
    lorem50,
    lorem200,
} from '../../data/lorem';

function AccordionsAccount(): React.ReactElement {
    return (
        <section className="accordions__account">
            <MuiAccordionParent
                aria="account"
                header="Account"
                content={lorem50}
            >
                <MuiAccordion
                    aria="account-1"
                    header="User Profile"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="account-2"
                    header="Settings"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="account-3"
                    header="Notifications"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="account-4"
                    header="Authentication"
                    content={lorem200}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsAccount;
