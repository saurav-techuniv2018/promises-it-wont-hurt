const alwaysThrows = require('./always-throws');

describe('alwaysThrows', () => {
  test('should throw an Error', () => {
    expect(() => { alwaysThrows(); }).toThrow();
  });
  test('should throw an Error with message \'OH NOES\'', () => {
    expect(() => { alwaysThrows(); }).toThrowError('OH NOES');
  });
});

