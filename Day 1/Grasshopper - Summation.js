const summation = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result.reduce((a, b) => a + b);
};

console.log(summation(8));
