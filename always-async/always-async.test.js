const alwaysAsync = require('./always-async');

describe('alwaysAsync', () => {
  test('should resolve to a Promise', () => {
    const testPromise = alwaysAsync();
    expect(testPromise).toBeInstanceOf(Promise);
  });
  test('should resolved to the right value', () => {
    const testPromise = alwaysAsync();

    testPromise.then((resolvedValue) => {
      expect(resolvedValue).toBe('PROMISE VALUE');
    });
  });
});

