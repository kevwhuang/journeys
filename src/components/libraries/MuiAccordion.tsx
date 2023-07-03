import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

interface Props {
    aria: string,
    content: string,
    expanded?: boolean,
    header: string,
}

function MuiAccordion(props: Props): React.ReactElement {
    const { aria, content, expanded, header } = props;

    return (
        <Accordion
            defaultExpanded={expanded}
            disableGutters={true}
        >
            <AccordionSummary
                id={`accordion-${aria}-header`}
                aria-controls={`accordion-${aria}-content`}
                expandIcon={<ExpandMoreOutlinedIcon />}
            >
                <h2>{header}</h2>
            </AccordionSummary>
            <AccordionDetails>
                <p>{content}</p>
            </AccordionDetails>
        </Accordion>
    );
}

export default MuiAccordion;
