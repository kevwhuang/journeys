import React from 'react';
import { Link } from 'react-router-dom';

function FooterPages(): React.ReactElement {
    return (
        <section className="footer__pages" hidden>
            <ul>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="guide">Guide</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </section>
    );
}

export default FooterPages;
