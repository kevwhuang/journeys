import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';

import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

interface Row {
    address: string,
    id: number,
    lat: number,
    long: number,
    time: string,
}

const initialize = {
    address: 'You don\'t have any pins!',
    id: 0,
    lat: 0,
    long: 0,
    time: new Date().toISOString(),
};

function PointsTable(): React.ReactElement {
    const [deletePin, navbar, pins, search]
        = useZustand(s => [s.deletePin, s.navbar, s.pins, s.search]);
    const [rows, setRows]: [Row[], any] = React.useState([initialize]);

    React.useEffect(() => {
        const data: Row[] = [];

        pins.forEach((pin, i) => data.push({ ...pin, id: i + 1 }));
        data.length && setRows(data);
    }, [pins]);

    function formatCoordinate(coordinate: number) {
        return String(coordinate)[0] === '-' ? coordinate : `+${coordinate}`;
    }

    function handleClick(i: number) {
        rows.length === 1 && setRows([initialize]);
        deletePin(i);
        toast('You\'ve removed a pin.', toastOptions);
    }

    return (
        <section className={navbar ? 'points__table opened' : 'points__table'}>
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <ol>
                <li className="points__table--headers">
                    <span>
                        <DeleteOutlinedIcon />
                    </span>
                    <span>
                        <FormatListNumberedOutlinedIcon />
                    </span>
                    <span>Date</span>
                    <span>Address</span>
                    <span>Lat</span>
                    <span>Long</span>
                </li>
                {rows
                    .filter(row => row.address
                        .replaceAll(',', '')
                        .toLowerCase()
                        .includes(search))
                    .map(row => (
                        <li className="points__table--row" key={uuid()}>
                            <span>
                                {row.id
                                    ? <DeleteOutlinedIcon onClick={() => handleClick(row.id - 1)} />
                                    : ''
                                }
                            </span>
                            <span>{row.id}</span>
                            <span>{row.time.slice(0, 10)}</span>
                            <span>
                                {row.id
                                    ? <Link to={`${row.id}`}>{row.address}</Link>
                                    : <Link to="../map">{row.address}</Link>
                                }
                            </span>
                            <span>{formatCoordinate(row.lat)}</span>
                            <span>{formatCoordinate(row.long)}</span>
                        </li>
                    ))}
                {rows
                    .filter(row => row.address
                        .replaceAll(',', '')
                        .toLowerCase()
                        .includes(search))
                    .map(row => (
                        <li className="points__table--card" key={uuid()}>
                            <p>
                                {formatCoordinate(row.lat)}
                                ,&nbsp;
                                {formatCoordinate(row.long)}
                                &nbsp;
                                {row.id
                                    ? <DeleteOutlinedIcon onClick={() => handleClick(row.id - 1)} />
                                    : ''
                                }
                            </p>
                            <p>
                                {row.id
                                    ? <Link to={`${row.id}`}>{row.address}</Link>
                                    : <Link to="../map">{row.address}</Link>
                                }
                            </p>
                        </li>
                    ))}
            </ol>
        </section>
    );
}

export default PointsTable;
