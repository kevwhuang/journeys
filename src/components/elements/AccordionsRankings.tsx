import React from 'react';

import MuiAccordion from '../libraries/MuiAccordion';
import MuiAccordionParent from '../libraries/MuiAccordionParent';

import {
    lorem50,
    lorem200,
} from '../../data/lorem';

function AccordionsRankings(): React.ReactElement {
    return (
        <section className="accordions__rankings">
            <MuiAccordionParent
                aria="rankings"
                header="Rankings"
                content={lorem50}
            >
                <MuiAccordion
                    aria="rankings-1"
                    header="Leaderboard"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="rankings-2"
                    header="Titles"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="rankings-3"
                    header="Trophies"
                    content={lorem200}
                />
                <MuiAccordion
                    aria="rankings-4"
                    header="Rewards"
                    content={lorem200}
                />
            </MuiAccordionParent>
        </section>
    );
}

export default AccordionsRankings;
