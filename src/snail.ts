const snailSort = (arr: Array<Array<number>>): Array<number> => {
    const res: Array<number> = [];
    let temp = [...arr];
    for (let i = 0, mid = 0, dir = 1; temp.length > 0; ) {
        if (temp.length === 1) {
            const last = i > 0 ? temp.pop().reverse() : temp.pop();
            res.push(...last);
            break;
        }
        if (i === 0) {
            res.push(...temp.shift());
            i += 1
            dir = 1;
        } else if (i === temp.length && dir > 0) {
            res.push(...temp.pop().reverse());
            i -= 2;
            mid -= 1;
            dir = -1;
        } else if (dir > 0 && mid < i) {
            res.push(temp[mid].pop());
            mid += 1;
            i += 1
        } else if (dir < 0 && i !== 0) {
            res.push(temp[mid].shift());
            mid -= 1;
            i -= 1;
        }
    }
    return res;
};

export default snailSort;
