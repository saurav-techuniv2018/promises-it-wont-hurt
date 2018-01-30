const alwaysAsync = require('./always-async');

describe('main', () => {
  test('should call console.log twice', () => {
    console.log = jest.fn();

    alwaysAsync().then(console.log)
      .then(() => {
        expect(console.log.mock.calls.length).toBe(2);
      });
    console.log('MAIN PROGRAM');
  });
  test('should call console.log with \'MAIN PROGRAM\' first, then with \'PROMISE VALUE\'', () => {
    console.log = jest.fn();

    alwaysAsync().then(console.log)
      .then(() => {
        expect(console.log.mock.calls[0][0]).toBe('MAIN PROGRAM');
        expect(console.log.mock.calls[1][0]).toBe('PROMISE VALUE');
      });
    console.log('MAIN PROGRAM');
  });
});
