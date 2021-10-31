import snail from '../src/snail';

test('function works', () => {
    expect(snail([[]])).toEqual([]);
    expect(snail([[1]])).toEqual([1]);
    expect(snail([[1, 2], [3, 4]])).toEqual([1, 2, 4, 3]);
    expect(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
