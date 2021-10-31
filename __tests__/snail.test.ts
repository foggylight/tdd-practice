import snail from '../src/snail';

test('function works', () => {
    expect(snail([[]])).toEqual([]);
    expect(snail([[1]])).toEqual([1]);
});
