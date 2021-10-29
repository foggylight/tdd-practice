import nextSmaller from '../src/nextSmaller';

test('function works', () => {
    expect(nextSmaller(21)).toBe(12);
    expect(nextSmaller(907)).toBe(790);
    expect(nextSmaller(531)).toBe(513);
    expect(nextSmaller(2071)).toBe(2017);
    expect(nextSmaller(509634)).toBe(509463);

    expect(nextSmaller(9)).toBe(-1);
    expect(nextSmaller(111)).toBe(-1);
    expect(nextSmaller(135)).toBe(-1);
    expect(nextSmaller(1017)).toBe(-1);
});
