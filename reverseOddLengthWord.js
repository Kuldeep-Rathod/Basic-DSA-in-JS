const reverseOddLengthWord = (str) => {
  let desire = str
    .split(" ")
    .map((word) => {
      return word.length % 2 == 0 ? word : word.split("").reverse().join("");
    })
    .join(" ");
  return desire;
};

console.log(reverseOddLengthWord("hello kuldeep good morning"));
