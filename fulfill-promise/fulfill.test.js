const fulfill = require('./fulfill');

describe(fulfill.name, () => {
  test('should call console.log function with \'FULFILLED!\'', (done) => {
    console.log = jest.fn();
    fulfill.then((message) => {
      expect(message).toBe('FULFILLED!');
      done();
    });
  });
  test('should call the setTimeout function once', () => {
    jest.useFakeTimers();
    fulfill.then(() => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
    });
  });
});

