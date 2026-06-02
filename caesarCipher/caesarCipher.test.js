import { caesarCipher } from "./caesarCipher";

test("basic", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("word", 3)).toBe("zrug");
  expect(caesarCipher("abc", 5)).toBe("fgh");
  expect(caesarCipher("abc", 10)).toBe("klm");
  expect(caesarCipher("abc", 15)).toBe("pqr");
  expect(caesarCipher("abc", 20)).toBe("uvw");
});

test("overflow", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("uvw", 6)).toBe("abc");
  expect(caesarCipher("abc", 30)).toBe("efg");
});

test("case sensitive", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("wOrLd", 3)).toBe("zRuOg");
});

test("punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("This. Is?", 1)).toBe("Uijt. Jt?");
});
