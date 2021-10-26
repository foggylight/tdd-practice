import { dblLinear } from '../src/twice-linear';

describe('dblLinear', () => {
    test('function takes number as the argument', () => {
        const res = dblLinear(5);
    });

    test('function returns number', () => {
        const res = dblLinear(5);
        expect(typeof res).toBe('number');
    });

    test('function works', () => {
        expect(dblLinear(0)).toBe(1);
        expect(dblLinear(1)).toBe(3);
    });
});
