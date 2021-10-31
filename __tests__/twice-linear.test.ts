import { dblLinear } from '../src/twice-linear';

test('function works', () => {
    expect(dblLinear(0)).toBe(1);
    expect(dblLinear(1)).toBe(3);
    expect(dblLinear(2)).toBe(4);
    expect(dblLinear(3)).toBe(7);
    expect(dblLinear(4)).toBe(9);
    expect(dblLinear(5)).toBe(10);

    expect(dblLinear(5)).toBe(3 * (2 * 1 + 1) + 1);

    expect(dblLinear(10)).toBe(22);
    expect(dblLinear(20)).toBe(57);
    expect(dblLinear(30)).toBe(91);
    expect(dblLinear(50)).toBe(175);
    expect(dblLinear(100)).toBe(447);
});
