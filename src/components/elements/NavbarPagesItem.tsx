import React from 'react';
import { Link } from 'react-router-dom';

import useZustand from '../../hooks/useZustand';

interface Props {
    counter?: number,
    icon: React.ReactElement,
    label: string,
    to: string,
}

function NavbarPagesItem(props: Props): React.ReactElement {
    const page = useZustand(s => s.page);
    const { counter, icon, label, to } = props;

    function setClass() {
        try {
            return label === `${page[0].toUpperCase()}${page.slice(1)}` ? 'active' : '';
        } catch {
            return '';
        }
    }

    return (
        <li className={setClass()}>
            <Link to={to}>
                <span>
                    {icon}
                    {label}
                </span>
                {counter && <span>{counter}</span>}
            </Link>
        </li>
    );
}

export default NavbarPagesItem;
