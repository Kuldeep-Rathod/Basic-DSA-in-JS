const firstRecurringChar = (input) => {
  let map = {};
  for (i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
};

const firstRecurringChar2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] == input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
};

console.log(firstRecurringChar2([2, 1, 5, 3, 4, 2, 1, 2, 8, 6, 4]));
