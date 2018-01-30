const explore = {
  resolve: Promise.resolve('RESOLVED'),
  reject: Promise.reject(new Error('REJECTED')),
};

module.exports = explore;
