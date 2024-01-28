const squareDigits = (num) =>
  +(num + "")
    .split("")
    .map((n) => n * n)
    .join("");

console.log(squareDigits(3212));
