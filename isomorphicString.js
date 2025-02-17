const isIsomorphicStr = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (map1.has(char1)) {
      if (map1.get(char1) !== char2) {
        return false;
      }
    } else {
      map1.set(char1, char2);
    }

    if (map2.has(char2)) {
      if (map2.get(char2) !== char1) {
        return false;
      }
    } else {
      map2.set(char2, char1);
    }
  }
  return true;
};

// console.log(isIsomorphicStr("egg", "add")); // ✅ Output: true
// console.log(isIsomorphicStr("foo", "bar")); // ✅ Output: false
// console.log(isIsomorphicStr("paper", "title")); // ✅ Output: true
// console.log(isIsomorphicStr("badc", "baba")); // ✅ Output: false

const areIso = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map1 = {};
  const map2 = {};

  for (i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (map1[char1] === undefined && map2[char2] === undefined) {
      map1[char1] = char2;
      map2[char2] = char1;
    } else if (map1[char1] !== char2 || map2[char2] !== char1) {
      return false;
    }
  }
  return true;
};

console.log(areIso("egg", "add")); // ✅ true
console.log(areIso("foo", "bar")); // ✅ false
console.log(areIso("paper", "title")); // ✅ true
console.log(areIso("badc", "baba")); // ✅ false
