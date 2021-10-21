import { dblLinear, makeSequence } from '../src/twice-linear';

const isYorZ = (cur: number, seq: Array<number>) => {
    // y = 2 * x + 1;
    // z = 3 * x + 1;
    const x1 = (cur - 1) / 2;
    const x2 = (cur - 1) / 3;
    return seq.find(num => num === x1 || num === x2);
}

describe('sequence', () => {
    const n = 7;
    const sequence = makeSequence(n);

    test('basics properties', () => {
        expect(sequence).toBeInstanceOf(Array);
        expect(sequence[0]).toBe(1);
    });

    test('all numbers are y or z', () => {
        for (let i = 1; i < sequence.length; i += 1) {
            expect(isYorZ(sequence[i], sequence)).toBeTruthy();
        }
    });

    test('numbers are sorted', () => {
        const isSequenceSorted = sequence.every((cur, i, arr) => !i || arr[i - 1] <= cur);
        expect(isSequenceSorted).toBeTruthy();
    });

    test('there are no duplicates', () => {

    });
});

describe('dblLinear', () => {
    test('function works', () => {
        let n = 100;
        expect(dblLinear(n)).toBe(makeSequence(n)[n]);
    });
});
