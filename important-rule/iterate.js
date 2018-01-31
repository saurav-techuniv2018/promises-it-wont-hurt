const iterate = (inputNumber) => {
  if (typeof inputNumber !== 'number' ||
    inputNumber >= Infinity ||
  inputNumber <= -Infinity
  ) {
    return undefined;
  }

  return inputNumber + 1;
};

module.exports = iterate;
