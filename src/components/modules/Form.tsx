import React from 'react';

import FormContact from '../elements/FormContact';

import '../../styles/modules/Form.scss';

function Form(): React.ReactElement {
    return (
        <section className="form">
            <FormContact />
        </section>
    );
}

export default Form;
