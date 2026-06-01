import { capitalize } from "./capitalize";

test("lowercase word", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("other")).toBe("Other");
});

test("uppercase word", () => {
  expect(capitalize("HELLO")).toBe("Hello");
  expect(capitalize("WORLD")).toBe("World");
});

test("alternating case word", () => {
  expect(capitalize("hElLo")).toBe("Hello");
  expect(capitalize("WoRlD")).toBe("World");
});

test("empty", () => {
  expect(capitalize("")).toBe("");
});

test("one char", () => {
  expect(capitalize("h")).toBe("H");
});
