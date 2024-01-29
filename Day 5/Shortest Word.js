/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 */

const findShort = (str) => Math.min(...str.split(" ").map((s) => s.length));

console.log(
  findShort(
    "21inc Lisk LiteCoin Factom 21inc Classic MadeSafeCoin Factom MadeSafeCoin MadeSafeCoin Classic Mine LiteCoin BTC"
  )
);
