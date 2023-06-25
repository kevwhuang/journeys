import React from 'react';
import { v4 as uuid } from 'uuid';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import useZustand from '../../hooks/useZustand';

function Notifications(): React.ReactElement {
    const [deleteNotification, modal, notifications]
        = useZustand(s => [s.deleteNotification, s.modals.notifications, s.records.notifications]);

    function getPriority(priority: number) {
        switch (priority) {
            case 0:
                return 'low';
            case 1:
                return 'medium';
            default:
                return 'high';
        }
    }

    function isPlural(length: number) {
        return length === 1 ? 'Notification' : 'Notifications';
    }

    return (
        <section className={modal ? 'notifications' : 'notifications closed'}>
            <span>{notifications.length} {isPlural(notifications.length)}</span>
            <ul>
                {notifications.map((notification, i) => (
                    <li key={uuid()}>
                        <CheckCircleOutlinedIcon onClick={() => deleteNotification(i)} />
                        <article>
                            <p className={getPriority(notification.priority)}>
                                {notification.subject}
                            </p>
                            <p>{notification.message}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Notifications;
