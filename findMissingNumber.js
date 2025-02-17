const missingNumber = (arr) => {
  const n = arr.length + 1;
  const sumOfNNumber = (n * (n + 1)) / 2;

  let sumOfArr = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArr = sumOfArr + arr[i];
  }

  const missingNumber = sumOfNNumber - sumOfArr;
  return missingNumber;
};

console.log(missingNumber([1, 2, 4, 3, 6, 7, 8, 9, 10])); // ✅ Output: 5
console.log(missingNumber([1, 2, 3, 5])); // ✅ Output: 4
console.log(missingNumber([2, 3, 4, 5])); // ✅ Output: 1 (Missing the smallest number)
console.log(missingNumber([1, 3, 4, 5])); // ✅ Output: 2
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])); // ✅ Output: 9
