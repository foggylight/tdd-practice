// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

enum Direction {
    Up,
    Down,
}

const snail = (arr: Array<Array<number>>): Array<number> => {
    const res = [];
    let temp = [...arr];

    for (let i = 0, dir = Direction.Down; temp.length > 0; ) {
        if (temp.length === 1) {
            const last = i > 0 ? temp.pop().reverse() : temp.pop();
            res.push(...last);
            break;
        }

        if (i === 0) {
            res.push(...temp.shift());
            i += 1
            dir = Direction.Down;
        } else if (i === temp.length && dir === Direction.Down) {
            res.push(...temp.pop().reverse());
            i -= 2;
            dir = Direction.Up;
        } else if (dir === Direction.Down) {
            res.push(temp[i - 1].pop());
            i += 1
        } else if (dir === Direction.Up) {
            res.push(temp[i].shift());
            i -= 1;
        }
    }

    return res;
};

export default snail;
