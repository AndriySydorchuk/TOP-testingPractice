const calculator = (() => {
  function add(num1, num2) {
    return num1 + num2;
  }

  function substract(num1, num2) {
    return num1 - num2;
  }

  function divide(num1, num2) {
    if (num2 === 0) throw new Error("Can't divide by zero");
    return num1 / num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  return { add, substract, divide, multiply };
})();

export { calculator };
