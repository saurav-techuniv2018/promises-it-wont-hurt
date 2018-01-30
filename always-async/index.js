const alwaysAsync = new Promise((resolve) => {
  resolve('PROMISE VALUE');
});


alwaysAsync.then(console.log);
console.log('MAIN PROGRAM');
