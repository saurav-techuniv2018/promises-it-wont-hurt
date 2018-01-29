const fulfill = new Promise((resolve) => {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});

module.exports = fulfill;
