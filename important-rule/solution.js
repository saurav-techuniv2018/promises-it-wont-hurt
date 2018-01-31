const alwaysThrows = () => {
  throw new Error('OH NOES');
};

const iterate = (inputNumber) => {
  if (typeof inputNumber !== 'number' ||
    inputNumber >= Infinity ||
    inputNumber <= -Infinity
  ) {
    return undefined;
  }

  return inputNumber + 1;
};

const solution = (thenCallback, catchCallback) =>
  new Promise(() =>
    Promise.resolve(iterate(0))
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      }).then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return alwaysThrows();
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .then((value) => {
        thenCallback(value);
        return iterate(value);
      })
      .catch(reason => catchCallback(reason.message)));

module.exports = solution;

// solution(console.log, console.log);
