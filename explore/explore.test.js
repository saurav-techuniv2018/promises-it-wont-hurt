const explore = require('./explore');

describe('explore.resolve', () => {
  test('should resolve to a Promise', () => {
    expect(explore.resolve).toBeInstanceOf(Promise);
  });
  test('should resolve to \'RESOLVED\'', () => {
    explore.resolve
      .then((value) => {
        expect(value).toBe('RESOLVED');
      })
      .catch(() => { });
  });
});

describe('explore.reject', () => {
  test('should resolve to a Promise', () => {
    expect(explore.reject).toBeInstanceOf(Promise);
  });
  test('should resolve to \'REJECTED\'', () => {
    explore.reject
      .then(() => { })
      .catch((reason) => {
        expect(reason).toEqual(new Error('REJECTED'));
      });
  });
});
