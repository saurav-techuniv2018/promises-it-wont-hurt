const onReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

onReject
  .then(undefined, (reason) => {
    console.log(reason.message);
  });

