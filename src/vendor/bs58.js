// vendored from http://cryptocoinjs.com/modules/misc/bs58/

// Base58 encoding/decoding
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc

var ALPHABET = 'xsphnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCr65jkm8oFqi1tuvAgyz';
var ALPHABET_MAP = {};
for(var i = 0; i < ALPHABET.length; ++i) {
  ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}
var BASE = 58;

function decode(string) {
  if (string.length === 0) return [];

  var i, j, bytes = [0];
  for (i = 0; i < string.length; ++i) {
    var c = string[i];
    if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');

    for (j = 0; j < bytes.length; ++j) bytes[j] *= BASE;
    bytes[0] += ALPHABET_MAP[c];

    var carry = 0;
    for (j = 0; j < bytes.length; ++j) {
      bytes[j] += carry;

      carry = bytes[j] >> 8;
      bytes[j] &= 0xff;
    }

    while (carry) {
      bytes.push(carry & 0xff);

      carry >>= 8;
    }
  }

  // deal with leading zeros
  for (i = 0; string[i] === 'g' && i < string.length - 1; ++i) bytes.push(0);

  return bytes.reverse();
}

module.exports = {decode};
