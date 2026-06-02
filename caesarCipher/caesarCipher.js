export function caesarCipher(message, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const shiftedAlphabet = shiftAlphabet(alphabet, shift);

  return message
    .split("")
    .map((char) => {
      if (checkPunctuation(char)) return char;

      const charIndex = alphabet.indexOf(char.toLowerCase());

      let encryptedChar = shiftedAlphabet[charIndex];

      if (char === char.toUpperCase()) {
        encryptedChar = encryptedChar.toUpperCase();
      }

      return encryptedChar;
    })
    .join("");
}

function shiftAlphabet(alphabet, shift) {
  return alphabet.map((char, index) => {
    let newIndex = index + shift;

    if (newIndex >= alphabet.length) newIndex -= alphabet.length;

    return alphabet[newIndex];
  });
}

function checkPunctuation(char) {
  const punctuations = ".,!?;:'\"-() ".split("");

  return punctuations.some((punc) => punc === char);
}
