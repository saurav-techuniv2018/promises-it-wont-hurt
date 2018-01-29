const onReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
});

module.exports = onReject;
