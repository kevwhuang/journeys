import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

function ControlsSearch(): React.ReactElement {
    const inputRef = React.useRef<any>();
    const [page, updateSearch] = useZustand(s => [s.page, s.updateSearch]);

    function getDisabled() {
        if (page === 'pins') return false;
        if (page === 'rankings') return false;
        return true;
    }

    function getPlaceholder() {
        if (page === 'pins') return 'search pins …';
        if (page === 'rankings') return 'search leaderboards …';
        return '';
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        updateSearch(e.target.value.toLowerCase());
    }

    React.useEffect(() => {
        inputRef.current.value = '';
        updateSearch('');
    }, [page]);

    return (
        <section className="controls__search">
            <MuiTooltip title="Search">
                <label htmlFor="input-search">
                    <SearchOutlinedIcon
                        className={(page === 'pins' || page === 'rankings') ? 'active' : ''}
                    />
                </label>
            </MuiTooltip>
            <input
                id="input-search"
                type="text"
                placeholder={getPlaceholder()}
                maxLength={100}
                disabled={getDisabled()}
                onChange={e => handleChange(e)}
                ref={inputRef}
            />
        </section>
    );
}

export default ControlsSearch;
