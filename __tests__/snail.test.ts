import snailSort from '../src/snail';

test('function works', () => {
    expect(snailSort([[]])).toEqual([]);
    expect(snailSort([[1]])).toEqual([1]);
});
