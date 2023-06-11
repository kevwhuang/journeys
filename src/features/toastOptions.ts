const toastOptions: Object = {
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
    duration: 3e3,
    icon: '✔',
    position: 'bottom-right',
    style: {
        background: '#407ad6',
        borderRadius: '10px',
        color: '#f3f4f5',
        cursor: 'default',
        padding: '10px 20px',
        userSelect: 'none',
    },
};

export default toastOptions;
