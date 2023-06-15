import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import useZustand from '../../hooks/useZustand';

import MuiTooltip from '../libraries/MuiTooltip';

function ControlsSearch(): React.ReactElement {
    const inputRef = React.useRef<any>();
    const [page, updateSearch] = useZustand(s => [s.page, s.updateSearch]);

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
                    <SearchOutlinedIcon className={page === 'rankings' ? 'active' : ''} />
                </label>
            </MuiTooltip>
            <input
                id="input-search"
                type="text"
                placeholder="search leaderboards …"
                maxLength={100}
                disabled={page !== 'rankings'}
                onChange={e => handleChange(e)}
                ref={inputRef}
            />
        </section>
    );
}

export default ControlsSearch;
