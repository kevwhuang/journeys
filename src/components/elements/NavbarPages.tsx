import React from 'react';
import { Link } from 'react-router-dom';

function NavbarPages(): React.ReactElement {
    return (
        <section className="navbar__pages" hidden>
            <ul>
                <li>
                    <i></i>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <i></i>
                    <Link to="map">Map</Link>
                </li>
                <li>
                    <i></i>
                    <Link to="pins">Pins</Link>
                    <i title="count"></i>
                </li>
                <li>
                    <i></i>
                    <Link to="rankings">Rankings</Link>
                </li>
                <li>
                    <i></i>
                    <Link to="profile">Profile</Link>
                </li>
            </ul>
        </section>
    );
}

export default NavbarPages;
