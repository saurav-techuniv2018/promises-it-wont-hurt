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

Promise.resolve(iterate(0))
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  }).then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return alwaysThrows();
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .then((value) => {
    console.log(value);
    return iterate(value);
  })
  .catch(reason => console.log(reason.message));

