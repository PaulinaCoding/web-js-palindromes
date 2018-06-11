function isPalindrome(s) {
  str = s.split(" ").join("");
  var stringReverse = s.split("").reverse().join("").split(" ").join("");
  return str == stringReverse;
}
module.exports = isPalindrome;
