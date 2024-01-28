const isTriangle = (a, b, c) => {
  const max = Math.max(a, b, c);
  const sum = a + b + c;
  return sum - max > max;
};

console.log(isTriangle(7, 2, 2));
