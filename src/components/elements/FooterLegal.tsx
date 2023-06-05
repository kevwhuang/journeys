import React from 'react';
import { Link } from 'react-router-dom';

function FooterLegal(): React.ReactElement {
    return (
        <section className="footer__legal">
            <ul>
                <li>
                    <p>© 2023 Journeys. All rights reserved.</p>
                </li>
                <li>
                    <Link to="terms">Terms</Link>
                </li>
                <li>
                    <Link to="privacy">Privacy</Link>
                </li>
            </ul>
        </section>
    );
}

export default FooterLegal;
