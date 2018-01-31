const parsePromised = require('./parsed-promised');

const index = (jsonString, thenCallback, catchCallback) => Promise.resolve(parsePromised(jsonString)
  .then(thenCallback)
  .catch(catchCallback));

module.exports = index;
