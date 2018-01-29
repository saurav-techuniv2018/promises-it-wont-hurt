const rejectOrNot = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

module.exports = rejectOrNot;
