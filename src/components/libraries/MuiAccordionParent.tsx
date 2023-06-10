import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

interface Props {
    aria: string,
    children: React.ReactElement | React.ReactElement[],
    content: string,
    expanded?: boolean,
    header: string,
}

function MuiAccordion(props: Props): React.ReactElement {
    const { aria, children, content, expanded, header } = props;

    return (
        <Accordion
            defaultExpanded={expanded}
            disableGutters={true}
            square={true}
        >
            <AccordionSummary
                id={`accordion-${aria}-0-header`}
                aria-controls={`accordion-${aria}-0-content`}
                expandIcon={<ExpandMoreOutlinedIcon />}
            >
                <h2>{header}</h2>
            </AccordionSummary>
            <AccordionDetails>
                <p>{content}</p>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

export default MuiAccordion;
