import React from 'react';

import '../../styles/status/Error.scss';

function Error(): React.ReactElement {
    return (
        <main id="error">
            <section>
                <h1>400: Unknown Error</h1>
            </section>
        </main>
    );
}

export default Error;
