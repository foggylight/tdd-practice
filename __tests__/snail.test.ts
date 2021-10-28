import snailSort from '../src/snail';

test('function works', () => {
    expect(snailSort([[]])).toEqual([]);
    expect(snailSort([[1]])).toEqual([1]);
    expect(snailSort([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
