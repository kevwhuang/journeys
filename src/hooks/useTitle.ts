'use strict';

import React from 'react';

type CB = () => void;

function useTitle(title: string): void {
    const defaultTitle: React.MutableRefObject<string> = React.useRef(document.title);

    React.useEffect((): CB => (): void => {
        document.title = defaultTitle.current;
    }, []);

    React.useEffect((): void => {
        document.title = title;
    }, [title]);
}

export default useTitle;
