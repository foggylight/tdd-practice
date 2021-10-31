const nextSmaller = (number: number): number => {
    const result = `${number}`.split('').reverse().join('');
    return result.length > 1 ? +result : -1;
};

export default nextSmaller;
