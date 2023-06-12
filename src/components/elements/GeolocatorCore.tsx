import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuid } from 'uuid';

import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

let initialized = false;

function GeolocatorCore(): React.ReactElement {
    const [currentPosition, setCurrentPosition]: any = React.useState([]);
    const [pins, power, tracks] = useZustand(s => [s.records.pins, s.power, s.tracks]);
    const [updatePosition, updateSignal, updateTracks]
        = useZustand(s => [s.updatePosition, s.updateSignal, s.updateTracks]);

    React.useEffect(() => {
        (function geolocation() {
            const geo = navigator.geolocation;

            if (!initialized && geo) {
                if (navigator.userAgent.search(/Macintosh|Windows NT/) === -1) {
                    toast('You are on a mobile device.', toastOptions);
                } else {
                    toast('You are on a computer.', toastOptions);
                }

                initialized = true;
                geo.watchPosition(writePos, errorPos);
            } else if (!initialized) {
                initialized = true;
                return toast('Your browser does not support geolocation.', { ...toastOptions, icon: '✘' });
            }

            function errorPos(err: any) {
                if (!navigator.onLine) {
                    toast('Please check your connection.', { ...toastOptions, icon: '✘' });
                } else if (err.PERMISSION_DENIED) {
                    toast('Please enable location services.', { ...toastOptions, icon: '✘' });
                } else {
                    toast('An unknown error has occured.', { ...toastOptions, icon: '✘' });
                }
            }

            function writePos(pos: any) {
                power && setCurrentPosition([pos.coords.latitude.toFixed(4), pos.coords.longitude.toFixed(4)]);

                if (pos.coords.accuracy >= 20) updateSignal(3);
                else if (pos.coords.accuracy >= 10) updateSignal(2);
                else updateSignal(1);
            }
        }());
    }, [power, updateSignal]);

    React.useEffect(() => {
        if (power && currentPosition.length) {
            updatePosition(Number(currentPosition[0]), Number(currentPosition[1]));
            updateTracks(String(currentPosition));
        }
    }, [currentPosition, updatePosition, updateTracks]);

    return (
        <section className="geolocator__core">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <div className="geolocator__core--temp">
                [tracks]
                {[...tracks].map(point => (
                    <p key={uuid()}>
                        lat: {point.slice(0, point.indexOf(','))}
                        {' | '}
                        long: {point.slice(point.indexOf(',') + 1)}
                    </p>
                ))}
            </div>
            <br />
            <div className="geolocator__core--temp">
                [pins]
                {[...pins].map(pin => (
                    <p key={uuid()}>
                        lat: {pin.lat}
                        {' | '}
                        long: {pin.long}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default GeolocatorCore;
