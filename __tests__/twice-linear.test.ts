import { dblLinear } from '../src/twice-linear';

describe('dblLinear', () => {
    test('function returns number', () => {
        const res = dblLinear(5);
        expect(typeof res).toBe('number');
    });

    test('function works', () => {
        expect(dblLinear(0)).toBe(1);
        expect(dblLinear(1)).toBe(3);
        expect(dblLinear(2)).toBe(4);
        expect(dblLinear(3)).toBe(7);
        expect(dblLinear(4)).toBe(9);
        expect(dblLinear(5)).toBe(10);

        expect(dblLinear(10)).toBe(22);
        expect(dblLinear(20)).toBe(57);
    });
});
