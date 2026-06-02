import { analyzeArray } from "./analyzeArray";

test("test1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 8, 10, 4, 2, 6, 5])).toEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 7,
  });
});

test("test2", () => {
  expect(() => analyzeArray([1, "8", 3, 4, 2, 6])).toThrow(
    "Invalid data. Only array of integers is accepted",
  );
  expect(() => analyzeArray([1, 8, "H", 4, 2, 6, 5])).toThrow(Error);
});
