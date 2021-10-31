const snail = (array: Array<Array<number>>): Array<number> => {
    const result = [];
    result.push(...array.pop());
    return result;
};

export default snail;