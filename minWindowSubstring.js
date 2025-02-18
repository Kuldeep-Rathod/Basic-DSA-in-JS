const minWindowSubstring = (s, t) => {
    if (s === t) return s;
    if (s.length < t.length) return "";

    let need = {};
    let have = {};
    let haveCount = 0;
    let found = false;
    let minSet = [0, s.length - 1];
    let min = s.length;

    for (let i = 0; i < t.length; i++) {
        need[t[i]] = ++need[t[i]] || 1;
    }

    let i = 0;
    let j = 0;
    let needCount = Object.values(need).length;

    while (j < s.length) {
        if (need[s[j]] !== undefined) {
            have[s[j]] = ++have[s[j]] || 1;
            if (have[s[j]] == need[s[j]]) {
                ++haveCount;
            }
        }

        while (haveCount == needCount) {
            found = true;
            let tempMin = j - i + 1;
            if (tempMin < min) {
                min = tempMin;
                minSet = [i, j];
            }
            if (have[s[i]] !== undefined) {
                --have[s[i]];
                if (have[s[i]] < need[s[i]]) {
                    --haveCount;
                }
            }
            i++;
        }
        j++;
    }
    return found ? s.substring(minSet[0], minSet[1] + 1) : "";
};



console.log(minWindowSubstring("aaabaaddae", "aed"));
console.log(minWindowSubstring("abc", "abc")); // "abc" (Exact match)
console.log(minWindowSubstring("abcde", "ac")); // "abc" (Non-contiguous match)
console.log(minWindowSubstring("abcdef", "xyz")); // "" (No match)
console.log(minWindowSubstring("adobecodebanc", "abc")); // "banc"
console.log(minWindowSubstring("a", "aa")); // "" (t has more occurrences than s)
console.log(minWindowSubstring("a", "a")); // "a" (Single character match)
