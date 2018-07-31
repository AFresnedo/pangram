// take a string
// have an array of each letter in alaphabet
// if a string has a character in the array then pop that char from array
// if array is empty at the end then it was a pangram
  // i mean, for computational sake, stop as soon as array is empty
  // while loop for if array is empty or string is empty?

// TODO is this valid multi-line syntax?
alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v,
  w, x, y, z];

function pangram(string) {
  // for every char in string
  for (var i = 0; i < string.length; i++) {
    c = string.charAt(i);
    //  while array is not empty
    //  if array contains char
    index = alphabet.indexOf(c);
    if (index !== -1) {
      // remove this index from alphabet
    }
  }
}
