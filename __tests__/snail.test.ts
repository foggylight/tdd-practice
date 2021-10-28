import snailSort from '../src/snail';

test('function returns an array', () => {
    const res = snailSort([[]]);
    expect(Array.isArray(res)).toBeTruthy();
});
