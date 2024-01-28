const abbrevName = (name) => {
  const arr = name.split(" ").map((n) => n.split(""));
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
};

console.log(abbrevName("Sam Harris"));
