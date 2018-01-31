const attachTitle = require('./attach-title');
const manhattan = require('./manhattan');

const index = () => Promise.resolve(manhattan
  .then(attachTitle)
  .then(console.log));

module.exports = index;
