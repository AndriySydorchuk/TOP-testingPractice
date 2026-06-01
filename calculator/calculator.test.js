import { calculator } from "./calculator";

test("addition", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(2, 3)).toEqual(5);
  expect(calculator.add(5, -5)).toEqual(0);
  expect(calculator.add(3, -8)).toEqual(-5);
  expect(calculator.add(0, 0)).toEqual(0);
});

test("substraction", () => {
  expect(calculator.substract(3, 1)).toEqual(2);
  expect(calculator.substract(10, 10)).toEqual(0);
  expect(calculator.substract(2, 3)).toEqual(-1);
  expect(calculator.substract(2, -3)).toEqual(5);
  expect(calculator.substract(0, 0)).toEqual(0);
  expect(calculator.substract(-3, -3)).toEqual(0);
});

test("division", () => {
  expect(calculator.divide(4, 2)).toEqual(2);
  expect(calculator.divide(10, 2)).toEqual(5);
  expect(calculator.divide(20, 20)).toEqual(1);
  expect(calculator.divide(-6, 3)).toEqual(-2);
  expect(calculator.divide(-8, -4)).toEqual(2);
  expect(() => calculator.divide(10, 0)).toThrow("Can't divide by zero");
});

test("multiplication", () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
  expect(calculator.multiply(4, 0)).toEqual(0);
  expect(calculator.multiply(10, -2)).toEqual(-20);
  expect(calculator.multiply(-3, -4)).toEqual(12);
});
