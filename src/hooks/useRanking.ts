'use strict';

import rankings from '../data/rankings.json';

const levels: number[] = calculateLevels();

function calculateLevels(): number[] {
    const GROWTH: number = 0.01;
    const levels: number[] = [0];
    let current: number = 1;

    while (current <= 1000) {
        levels.push(Math.trunc(((levels[levels.length - 1] / 1e4) + (GROWTH * current)) * 1e4));
        current++;
    }

    return levels;
}

function useRanking(experience: number): string {
    let level: number = 0;

    for (let i = 0; i < levels.length; i++) {
        if (experience < levels[i]) {
            level = i - 1;
            break;
        }

        if (i === 1000) return 'Divine';
    }

    return (rankings[Math.ceil(level / 50)]);
}

export default useRanking;
