import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

let initialized = false;

function GeolocatorCore(): React.ReactElement {
    const [currentPosition, setCurrentPosition]: any = React.useState([]);
    const [power, updatePosition, updateSignal, updateTracks]
        = useZustand(s => [s.power, s.updatePosition, s.updateSignal, s.updateTracks]);

    React.useEffect(() => {
        (function geolocation() {
            const geo = navigator.geolocation;

            if (!initialized && geo) {
                if (navigator.userAgent.search(/Macintosh|Windows NT/) === -1) {
                    toast('You are tracking on a mobile device.', toastOptions);
                } else {
                    toast('You are tracking on a computer.', toastOptions);
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
    }, [currentPosition, power, updatePosition, updateTracks]);

    return (
        <section className="geolocator__core">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
        </section>
    );
}

export default GeolocatorCore;
