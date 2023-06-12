import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import useZustand from '../../hooks/useZustand';

function PointsTable(): React.ReactElement {
    const [deletePin, pins] = useZustand(s => [s.deletePin, s.records.pins]);

    return (
        <section className="points__table">
            <ul>
                {pins.map((pin, i) => (
                    <li key={uuid()}>
                        <p>
                            lat: {pin.lat}
                            {' | '}
                            long: {pin.long}
                            <DeleteOutlinedIcon onClick={() => deletePin(i)} />
                        </p>
                        <Link to={`${i}`}>view</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PointsTable;
