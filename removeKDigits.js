const removeKDigits = (num, k) => {
    arr = [];

    for (let digit of num) {
        while (k > 0 && arr.length > 0 && arr[arr.length - 1] > digit) {
            arr.pop();
            k--;
        }
        arr.push(digit);
    }

    while (k > 0) {
        arr.pop();
        k--;
    }

    let result = arr.join("").replace(/^0+/, "");
    return result === "" ? "0" : result;
};

console.log(removeKDigits("1432219", 3)); // Output: "1219"
console.log(removeKDigits("10200", 1));   // Output: "200"
console.log(removeKDigits("10", 2));      // Output: "0"
console.log(removeKDigits("9", 1));       // Output: "0"
console.log(removeKDigits("1001", 2));    // Output: "0"
console.log(removeKDigits("112", 1));     // Output: "11"