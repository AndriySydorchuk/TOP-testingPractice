//accept only array of numbers

export function analyzeArray(arr) {
  if (checkArray(arr))
    throw new Error("Invalid data. Only array of integers is accepted");

  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

function getAverage(arr) {
  return Math.round(arr.reduce((prev, curr) => prev + curr) / arr.length);
}

function getMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
}

function getMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

function checkArray(arr) {
  return arr.some((element) => !Number.isInteger(element));
}
