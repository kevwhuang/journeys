import React from 'react';

function ControlsSystem(): React.ReactElement {
    return (
        <section className="controls__system" hidden>
            <i title="notifications"></i>
            <i title="theme"></i>
            <i title="refresh"></i>
            <i title="login"></i>
        </section>
    );
}

export default ControlsSystem;
