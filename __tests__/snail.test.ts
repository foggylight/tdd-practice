import snail from '../src/snail';

test('function returns an array', () => {
    expect(Array.isArray(snail([[]]))).toBeTruthy();
});
