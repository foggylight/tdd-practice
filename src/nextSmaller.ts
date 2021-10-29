const nextSmaller = (n: number): number => {
    return +`${n}`.split('').reverse().join('');
};

export default nextSmaller;
