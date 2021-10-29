import nextSmaller from '../src/nextSmaller';

test('function works', () => {
    expect(nextSmaller(21)).toBe(12);
    expect(nextSmaller(907)).toBe(790);
});
