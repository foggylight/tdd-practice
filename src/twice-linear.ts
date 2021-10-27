// https://www.codewars.com/kata/5672682212c8ecf83e000050

export const dblLinear = (n: number) => {
    let sequence = [1];

    for (let i = 0, x1 = 0, x2 = 0; i < n; i += 1) {
        const y = 2 * sequence[x1] + 1;
        const z = 3 * sequence[x2] + 1;
        if (y <= z) {
            sequence.push(y);
            x1 += 1;
        } if (z === y) {
            x2 += 1;
        } else if (z < y) {
            sequence.push(z);
            x2 += 1;
        }
    }

    return sequence[n];
};
