const explore = {
  resolve: Promise.resolve('RESOLVED'),
  reject: Promise.reject(new Error('REJECTED')),
};

explore.resolve
  .then((value) => {
    console.log(`Yes: ${value}`);
  });

explore.resolve
  .catch((reason) => {
    console.log(`NO! ${reason}`);
  });

