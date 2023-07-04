import React from 'react';
import { useParams } from 'react-router-dom';

import useTitle from '../hooks/useTitle';
import useZustand from '../hooks/useZustand';

import Point from '../components/modules/Point';

function Pins_Single(): React.ReactElement {
    const changePage = useZustand(s => s.changePage);
    const id = useParams().id;

    useTitle('Journeys | Pin');

    React.useEffect(() => {
        changePage('');
        scroll(0, 0);
    }, []);

    return (
        <main id="pins_single">
            <Point id={Number(id)} />
        </main>
    );
}

export default Pins_Single;
