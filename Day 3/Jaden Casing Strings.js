String.prototype.toJadenCase = function () {
  const word = this.split()[0].split(" ");
  const jaden = word.map((letter) => letter[0].toUpperCase());
  return jaden.map((a, i) => a + word[i].slice(1)).join(" ");
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
