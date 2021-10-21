export const makeSequence = (n: number): Array<number> => {
    let sequence: Set<number> = new Set();
    sequence.add(1);
    for (let i = 0; [...sequence].length < n; i += 1) {
        const x = [...sequence][i];
        const y = 2 * x + 1;
        const z = 3 * x + 1;
        sequence.add(y);
        sequence.add(z);
        sequence = new Set([...sequence].sort((a, b) => a - b));
    }
    return [...sequence];
};

export const dblLinear = (n: number): number =>  makeSequence(n)[n];
