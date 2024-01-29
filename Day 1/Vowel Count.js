/**
 * DESCRIPTION:
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
  const vowelCount = str.match(/[aiueo]/gi);
  return !vowelCount ? 0 : vowelCount.length;
}

console.log(getCount("abracadabra"));
