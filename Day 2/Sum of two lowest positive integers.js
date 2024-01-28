const sumTwoSmallestNumbers = (numbers) => {
  const a = numbers.sort((a, b) => a - b);
  return a[0] + a[1];
};

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
