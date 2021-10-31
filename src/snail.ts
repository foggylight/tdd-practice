const snail = (array: Array<Array<number>>): Array<number> => {
    const result = [];
    while (array.length > 0) {
        result.push(...array.shift());
        array.map(row => row.reverse());
    }
    return result;
};

export default snail;