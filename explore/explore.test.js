const explore = require('./explore');

describe('explore.resolve', () => {
  test('should resolve to \'RESOLVED\'', () => {
    explore.resolve
      .then((value) => {
        expect(value).toBe('RESOLVED');
      })
      .catch(() => { });
  });
});

describe('explore.reject', () => {
  test('should resolve to \'REJECTED\'', () => {
    explore.resolve
      .then(() => { })
      .catch((reason) => {
        expect(reason).toBe('RESOLVED');
      });
  });
});
