// https://www.codewars.com/kata/5672682212c8ecf83e000050

export const dblLinear = (n: number) => {
    let sequence = [1];

    for (let i = 1, j = 1; i <= n; i = i * 2 + 1, j *= 2) {
        const y = (index: number) => 2 * sequence[i - j + index] + 1;
        const z = (index: number) => 3 * sequence[i - j + index] + 1;
        const newYs = new Array(j).fill(1).map((n, index) => y(index));
        const newZs = new Array(j).fill(1).map((n, index) => z(index));
        sequence = [...sequence, ...newYs, ...newZs];
    }

    return sequence[n];
};
