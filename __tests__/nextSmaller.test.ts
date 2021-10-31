import nextSmaller from '../src/nextSmaller';

test('function works', () => {
    expect(nextSmaller(9)).toBe(-1);
    expect(nextSmaller(10)).toBe(-1);
    expect(nextSmaller(11)).toBe(-1);
    expect(nextSmaller(79)).toBe(-1);

    expect(nextSmaller(21)).toBe(12);
    expect(nextSmaller(121)).toBe(112);
    expect(nextSmaller(211)).toBe(121);
    expect(nextSmaller(201)).toBe(120);
});
