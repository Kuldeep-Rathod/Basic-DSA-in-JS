// const isPalindrome = (str) => {
//   const reversed = str.split("").reverse().join("");

//   if (str == reversed) {
//     return true;
//   }
//   return false;
// };

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("madam")); // ✅ true
console.log(isPalindrome("hello")); // ❌ false
console.log(isPalindrome("racecar")); // ✅ true
console.log(isPalindrome("12321")); // ✅ true
