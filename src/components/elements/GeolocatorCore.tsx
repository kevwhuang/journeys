import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import useZustand from '../../hooks/useZustand';

import toastOptions from '../../features/toastOptions';

let initialized = false;

function GeolocatorCore(): React.ReactElement {
    const [currentPosition, setCurrentPosition]: any = React.useState([]);
    const [power, updateExperience, updatePosition, updateSignal, updateTracks]
        = useZustand(s => [s.power, s.updateExperience, s.updatePosition, s.updateSignal, s.updateTracks]);

    React.useEffect(() => {
        (function geolocation() {
            const geo = navigator.geolocation;

            if (!initialized && geo) {
                if (navigator.userAgent.search(/Macintosh|Windows NT/) === -1) {
                    toast('You\'re tracking on a mobile device.', toastOptions);
                } else {
                    toast('You\'re tracking on a computer.', toastOptions);
                }

                initialized = true;
                geo.watchPosition(writePos, errorPos);
            } else if (!initialized) {
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
                power && setCurrentPosition([pos.coords.latitude.toFixed(6), pos.coords.longitude.toFixed(6)]);
                power && updateExperience();

                if (pos.coords.accuracy >= 40) updateSignal(1);
                else if (pos.coords.accuracy >= 20) updateSignal(2);
                else updateSignal(3);
            }
        }());
    }, [power]);

    React.useEffect(() => {
        if (power && currentPosition.length) {
            updatePosition(Number(currentPosition[0]), Number(currentPosition[1]));
            updateTracks(String(currentPosition));
        }
    }, [currentPosition, power]);

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
