const rejectOrNot = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

rejectOrNot
  .then(
    console.log,
    (reason) => { console.error(reason.message); },
  );
