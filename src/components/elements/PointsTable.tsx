import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

function PointsTable(): React.ReactElement {
    const [deletePin, pins] = useZustand(s => [s.deletePin, s.pins]);

    function handleClick(i: number) {
        deletePin(i);
        toast('You\'ve removed a pin.', toastOptions);
    }

    return (
        <section className="points__table">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <ul>
                {pins.map((pin, i) => (
                    <li key={uuid()}>
                        <DeleteOutlinedIcon onClick={() => handleClick(i)} />
                        {' | '}
                        <span>
                            lat: {pin.lat}
                            {' | '}
                            long: {pin.long}
                        </span>
                        {' | '}
                        <Link to={`${i + 1}`}>view</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PointsTable;
