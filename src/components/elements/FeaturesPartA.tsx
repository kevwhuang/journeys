import React from 'react';

import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function FeaturesPartA(): React.ReactElement {
    return (
        <section className="features__part-a">
            <div className="features__part-a--container">
                <article>
                    <PushPinOutlinedIcon />
                    <h2>Pin</h2>
                    <p>
                        Save points of interest while on the move with a simple click.
                        Discover new information and conduct additional research.
                        Return at a later time for further exploration.
                    </p>
                </article>
                <article>
                    <LocationSearchingOutlinedIcon />
                    <h2>Track</h2>
                    <p>
                        Record movements with geolocation tracking and synchronize progress to local or cloud storage.
                        View drawing changes in real time with clarity and precision.
                        Battery-efficient, accurate, and supercharged.
                    </p>
                </article>
                <article>
                    <SettingsOutlinedIcon />
                    <h2>Customize</h2>
                    <p>
                        Craft a personalized experience with different configuration options.
                        Dictate how the map draws and renders the overlay.
                        Choose from a collection of pin styles, colors, and sizes.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default FeaturesPartA;
