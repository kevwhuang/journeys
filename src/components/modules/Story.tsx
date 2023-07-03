import React from 'react';

import StoryContent from '../elements/StoryContent';

import '../../styles/modules/Story.scss';

function Story(): React.ReactElement {
    return (
        <section className="story">
            <StoryContent />
        </section>
    );
}

export default Story;
