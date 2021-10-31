import snail from '../src/snail';

test('function works', () => {
    expect(snail([[]])).toEqual([]);
    expect(snail([[1]])).toEqual([1]);
    expect(snail([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);
});
