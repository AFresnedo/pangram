// take a string
// have an array of each letter in alaphabet
// if a string has a character in the array then pop that char from array
// if array is empty at the end then it was a pangram
  // i mean, for computational sake, stop as soon as array is empty
  // while loop for if array is empty or string is empty?

testTrue = 'abcdefghijklmnopqrstuvwxyz';
testTrueCap = 'abcdefghijKlmnopqrStuvwxyz';
// should not loop
testFalseLen = 'donotwork';
// should only loop 26 times and return false
testFalse = 'aaa3aaabcdefhijklmnopqrstuvwxyz';
// should only loop 26 times and return true
testOverloop = 'abcdefghijklmnopqrstuvwxyzzzzzzzzzz'

function pangram(string) {
  // if sting isnt at least 26 characters then it cant be pangram
  if (string !== undefined || string.length < 26) {
    return false;
  }
  // convert string to lowercase
  string = string.toLowerCase();
  // construct alphabet each call
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // for every char in string
  for (var i = 0; i < string.length; i++) {
    console.log('next loop begins, with i being', i);
    c = string.charAt(i);
    // if alphabet has something to compare to
    if (alphabet !== undefined && alphabet.length !== 0) {
      index = alphabet.indexOf(c);
      //  if array contains char
      if (index !== -1) {
        // remove this index from alphabet
        console.log('splicing index: ' + index);
        alphabet.splice(index, 1);
      }
    }
    // otherwise alphabet's elements are no longer comparable, end function
    else {
      // stop checking alphabet
      // returning false breaks out of the loop
      return false;
    }
  }
  // if alphabet is empty then string is a pangram
  console.log('alphabet is ', alphabet);
  if (alphabet.length === 0) {
    return true;
  }
  // else string is not a pangram
  else {
    return false;
  }
}
