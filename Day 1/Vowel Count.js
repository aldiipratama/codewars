function getCount(str) {
  const vowelCount = str.match(/[aiueo]/gi);
  return !vowelCount ? 0 : vowelCount.length;
}

console.log(getCount("abracadabra"));
