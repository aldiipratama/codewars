const dnaComplements = {
  A: "T",
  G: "C",
  T: "A",
  C: "G",
};

const dnaStrand = (dna) =>
  dna
    .split("")
    .map((i) => dnaComplements[i])
    .join("");

console.log(dnaStrand("AAAA"));
