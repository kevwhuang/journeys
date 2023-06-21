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
            <ol>
                <li className="points__table--headers">
                    <span>#</span>
                    {' | '}
                    <span>Date</span>
                    {' | '}
                    <span>Address</span>
                    {' | '}
                    <span>Latitude</span>
                    {' | '}
                    <span>Longitude</span>
                    {' | '}
                    <span>Delete</span>
                </li>
                {pins.map((pin, i) => (
                    <li key={uuid()}>
                        <Link to={`${i + 1}`}>{i + 1}</Link>
                        {' | '}
                        <span>{pin && pin.time.slice(0, 10)}</span>
                        {' | '}
                        <span>{pin.address}</span>
                        {' | '}
                        <span>
                            lat: {pin.lat}
                            {' | '}
                            long: {pin.long}
                        </span>
                        {' | '}
                        <DeleteOutlinedIcon onClick={() => handleClick(i)} />
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default PointsTable;
