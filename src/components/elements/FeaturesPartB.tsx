import React from 'react';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import InstallDesktopOutlinedIcon from '@mui/icons-material/InstallDesktopOutlined';

function FeaturesPartB(): React.ReactElement {
    return (
        <section className="features__part-b">
            <div className="features__part-b--container">
                <article>
                    <EmojiEventsOutlinedIcon />
                    <h2>Trophies</h2>
                    <p>
                        Gain experience and levels to unlock new titles and customization rewards.
                        Compete against friends and strangers to ascend the leaderboards and unlock trophies.
                    </p>
                </article>
                <article>
                    <InstallDesktopOutlinedIcon />
                    <h2>Install</h2>
                    <p>
                        Install the progressive web app to any device with the click of a button.
                        Enjoy all its features without running an active browser window.
                        Internet is optional.
                    </p>
                </article>
                <article>
                    <AccountCircleOutlinedIcon />
                    <h2>Profile</h2>
                    <p>
                        Share your stories and highlights with the world.
                        Connect with fellow adventurers in your area.
                        Introduce friends and family to the app for an endless good time.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default FeaturesPartB;
