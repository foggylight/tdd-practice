import { dblLinear } from '../src/twice-linear';

describe('dblLinear', () => {
    test('function takes number as the argument', () => {
        const res = dblLinear(5);
    });

    test('function returns number', () => {
        const res = dblLinear(5);
        expect(typeof res).toBe('number');
    });
});
