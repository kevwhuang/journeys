import { create } from 'zustand';

const initialize: State = {
    status: false,
    page: 'pins',
    theme: 'dark',
};

const useZustand = create<Actions & State>(() => ({
    ...initialize,
}));

export default useZustand;
