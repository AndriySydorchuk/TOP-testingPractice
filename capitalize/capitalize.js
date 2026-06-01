export function capitalize(str) {
  return str
    .split("")
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
}
