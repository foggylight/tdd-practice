const nextSmaller = (num: number): number => {
    const arr = `${num}`.split('').map(n => +n);
    let res: Array<number> = [];
    for (let i = arr.length - 2, j = arr.length - 1; i >= 0; ) {
        if (arr[i] <= arr[j]) {
            j -= 1;
        } if (j === i) {
            i -= 1;
            j = arr.length - 2;
        }
        if (arr[i] > arr[j]) {
            const smallerNum = arr.slice(i + 1).sort((a, b) => b - a).find(n => n < arr[i]);
            const smallerNumIndex = arr.length - 1 - arr.slice(i + 1).reverse().findIndex(n => n === smallerNum);
            const temp = arr[i];
            arr[i] = arr[smallerNumIndex];
            arr[smallerNumIndex] = temp;
            res = [...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => b - a)];
            break;
        }
    }
    return res.length > 1 && res[0] !== 0 ? +res.join('') : -1;
};

export default nextSmaller;
