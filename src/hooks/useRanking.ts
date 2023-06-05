const levels: number[] = calculateLevels();

function calculateLevels(): number[] {
    const FACTOR: number = .01;
    const levels: number[] = [0];
    let current: number = 1;

    while (current <= 1000) {
        levels.push(Math.trunc((levels[levels.length - 1] / 1e4 + FACTOR * current) * 1e4));
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

        if (i === 1000) level = 1000;
    }

    if (level === 0) return 'Uninitiated';
    if (level < 100) return 'Novice';
    if (level < 200) return 'Scout';
    if (level < 300) return 'Prospector';
    if (level < 400) return 'Surveyor';
    if (level < 500) return 'Pathfinder';
    if (level < 600) return 'Traveler';
    if (level < 700) return 'Explorer';
    if (level < 800) return 'Adventurer';
    if (level < 900) return 'Globetrotter';
    if (level < 1000) return 'Superhuman';
    return 'Immortal';
}

export default useRanking;
