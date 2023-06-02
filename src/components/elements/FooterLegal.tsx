import React from 'react';
import { Link } from 'react-router-dom';

function FooterLegal(): React.ReactElement {
    return (
        <section className="footer__legal" hidden>
            <ul>
                <li>
                    <p>© 2023 Journeys. All rights reserved.</p>
                </li>
                <li>
                    <Link to="privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="terms-of-service">Terms of Service</Link>
                </li>
            </ul>
        </section>
    );
}

export default FooterLegal;
