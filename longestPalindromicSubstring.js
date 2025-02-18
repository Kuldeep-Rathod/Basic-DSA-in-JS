const longestPalindromicSubstring = (str) => {
    if (str.length <= 1) return str;
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.substring(i, j);
            if (substring === substring.split("").reverse().join("")) {
                if (longest.length < substring.length) {
                    longest = substring;
                }
            }
        }
    }
    return longest;
};

console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
console.log(longestPalindromicSubstring("a")); // Output: "a"
console.log(longestPalindromicSubstring("ac")); // Output: "a" or "c"
console.log(longestPalindromicSubstring("racecar")); // Output: "racecar"
