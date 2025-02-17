const balencedParens = (input) => {
  return !input.split("").reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }

    return previous;
  }, 0);
};

console.log(balencedParens("()()hgg(g)"));
