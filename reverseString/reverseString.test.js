import { reverseString } from "./reverseString";

test("word", () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("world")).toBe("dlrow");
});

test("sentence", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
  expect(reverseString("Some sentence")).toBe("ecnetnes emoS");
});

test("palindromes", () => {
  expect(reverseString("madam")).toBe("madam");
  expect(reverseString("racecar")).toBe("racecar");
});

test("already reversed word", () => {
  expect(reverseString("olleH")).toBe("Hello");
  expect(reverseString("dlrow")).toBe("world");
});

test("already reversed sentence", () => {
  expect(reverseString("dlroW olleH")).toBe("Hello World");
  expect(reverseString("ecnetnes emoS")).toBe("Some sentence");
});
