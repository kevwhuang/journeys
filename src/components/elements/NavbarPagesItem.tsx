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

    function getClassName() {
        try {
            return label === `${page[0].toUpperCase()}${page.slice(1)}` ? 'active' : '';
        } catch {
            return '';
        }
    }

    function showCounter() {
        if (counter) return <span>{counter}</span>;
    }

    return (
        <li className={getClassName()}>
            <Link to={to}>
                <span>
                    {icon}
                    {label}
                </span>
                {showCounter()}
            </Link>
        </li>
    );
}

export default NavbarPagesItem;
