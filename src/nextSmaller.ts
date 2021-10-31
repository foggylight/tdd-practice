const nextSmaller = (number: number): number => {
    let result = `${number}`.split('');
    for (let currentIndex = result.length - 1; currentIndex > 0; currentIndex -= 1) {
        if (result[currentIndex - 1] > result[currentIndex]) {
            const beginning = result.slice(0, currentIndex - 1);
            const end = result.slice(currentIndex).sort((a, b) => +b - +a);
            const smallerNumber = end.find(n => n < result[currentIndex - 1]);
            const smallerNumberIndex = end.indexOf(smallerNumber);
            end[smallerNumberIndex] = result[currentIndex - 1];
            result = [...beginning, smallerNumber, ...end];
            return result[0] !== '0' ? +result.join('') : -1;
        }
    }
    return -1;
};

export default nextSmaller;
