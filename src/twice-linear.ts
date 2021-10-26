// https://www.codewars.com/kata/5672682212c8ecf83e000050

export const dblLinear = (n: number) => {
    const sequence = new Array(n + 1).fill(1);
    sequence[1] = 2 * sequence[0] + 1;
    sequence[2] = 3 * sequence[0] + 1;
    sequence[3] = 2 * (2 * sequence[0] + 1) + 1;
    return sequence[n];
};
