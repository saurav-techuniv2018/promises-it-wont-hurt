const fulfill = new Promise((resolve) => {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});

fulfill.then(console.log, console.err);
