const alwaysAsync = () => new Promise((resolve) => {
  resolve('PROMISE VALUE');
});

module.exports = alwaysAsync;
