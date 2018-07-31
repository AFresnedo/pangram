// take a string
// have an array of each letter in alaphabet
// if a string has a character in the array then pop that char from array
// if array is empty at the end then it was a pangram
  // i mean, for computational sake, stop as soon as array is empty
  // while loop for if array is empty or string is empty?


function pangram(string) {
// TODO is this valid multi-line syntax?
// construct alphabet each call
  alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v,
  w, x, y, z];
  // for every char in string
  for (var i = 0; i < string.length; i++) {
    c = string.charAt(i);
    // while alphabet is not empty
    while (alphabet !== undefined && alphabet.length !== 0)
    {
      //  if array contains char
      index = alphabet.indexOf(c);
      if (index !== -1) {
        // remove this index from alphabet
        alphabet.splice(i, 1);
      }
    }
  }
  // if alphabet is empty then string is a pangram
  if (alphabet !== undefined && alphabet.length === 0) {
    return true;
  }
  // else string is not a pangram
  else {
    return false;
  }
}
