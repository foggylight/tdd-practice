const nextSmaller = (number: number): number => {
    const result = `${number}`.split('').reverse();
    return result.length > 1 && result[0] !== '0' ? +result.join('') : -1;
};

export default nextSmaller;
