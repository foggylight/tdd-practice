const snailSort = (arr: Array<Array<number>>): Array<number> => {
    const res: Array<number> = [];
    let temp = arr;
    while (temp.length > 0) {
        if (temp.length === 1) {
            res.push(...temp.pop());
        } else {
            res.push(...temp.shift());
            res.push(temp[0].pop());
            res.push(...temp.pop().reverse());
            res.push(temp[0].shift());
        }
    }
    return res;
};

export default snailSort;
